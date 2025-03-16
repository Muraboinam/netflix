locals {
  name   = "nexflix"
  region = "ap-south-1"

  vpc_cidr = "10.123.0.0/16"
  azs      = ["ap-south-1a", "ap-south-1b"]

  public_subnets  = ["10.123.1.0/24", "10.123.2.0/24"]
  private_subnets = ["10.123.3.0/24", "10.123.4.0/24"]

  tags = {
    Example = local.name
  }
}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 4.0"

  name = local.name
  cidr = local.vpc_cidr

  azs             = local.azs
  private_subnets = local.private_subnets
  public_subnets  = local.public_subnets

  enable_nat_gateway = true

  public_subnet_tags = {
    "kubernetes.io/role/elb"                 = "1"
    "kubernetes.io/cluster/${local.name}"    = "owned"
  }

  private_subnet_tags = {
    "kubernetes.io/role/internal-elb"        = "1"
    "kubernetes.io/cluster/${local.name}"    = "owned"
  }
}

module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "19.15.1"

  cluster_name                   = local.name
  cluster_endpoint_public_access = true

  vpc_id                   = module.vpc.vpc_id
  subnet_ids               = module.vpc.private_subnets
  control_plane_subnet_ids = module.vpc.private_subnets

  cluster_addons = {
    coredns    = { most_recent = true }
    kube-proxy = { most_recent = true }
    vpc-cni    = { most_recent = true }
  }

  eks_managed_node_group_defaults = {
    ami_type       = "AL2_x86_64"
    instance_types = ["t4g.large"]
    attach_cluster_primary_security_group = true
  }

  eks_managed_node_groups = {
    ascode-cluster-wg = {
      min_size     = 1
      max_size     = 2
      desired_size = 1

      instance_types = ["t4g.large"]
      capacity_type  = "SPOT"
      ami_id         = "ami-09773b29dffbef1f2"

      tags = {
        ExtraTag = "nex"
      }
    }
  }

  node_security_group_additional_rules = {
    ingress_self_all = {
      description = "Allow node-to-node communication"
      protocol    = "-1"
      from_port   = 0
      to_port     = 0
      type        = "ingress"
      self        = true
    }
  }

  tags = local.tags
}
