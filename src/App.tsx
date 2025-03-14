import React, { useState } from 'react';
import { Play, Info, Bell, Search, ChevronDown } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-zinc-900' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
              <div className="hidden md:flex space-x-4">
                <a href="#" className="hover:text-gray-300">Home</a>
                <a href="#" className="hover:text-gray-300">TV Shows</a>
                <a href="#" className="hover:text-gray-300">Movies</a>
                <a href="#" className="hover:text-gray-300">New & Popular</a>
                <a href="#" className="hover:text-gray-300">My List</a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />
              <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300" />
              <div className="flex items-center gap-2 cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                  alt="Profile"
                  className="w-8 h-8 rounded"
                />
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0"
            alt="Featured Movie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-7xl font-bold mb-4">Stranger Things</h1>
              <p className="text-lg text-gray-300 mb-8">
                When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-black px-8 py-3 rounded flex items-center gap-2 hover:bg-gray-200 transition-colors">
                  <Play className="w-5 h-5" /> Play
                </button>
                <button className="bg-gray-500/70 text-white px-8 py-3 rounded flex items-center gap-2 hover:bg-gray-500/90 transition-colors">
                  <Info className="w-5 h-5" /> More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative z-10 -mt-32 pb-12">
        <div className="container mx-auto px-4">
          {/* Trending Now */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative group cursor-pointer">
                  <img
                    src={`https://images.unsplash.com/photo-167${item}814026160-2237a95fc5a0`}
                    alt={`Trending ${item}`}
                    className="w-full aspect-[2/3] object-cover rounded-md group-hover:ring-4 ring-gray-400 transition-all"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Continue Watching */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Continue Watching</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[7, 8, 9, 10, 11, 12].map((item) => (
                <div key={item} className="relative group cursor-pointer">
                  <img
                    src={`https://images.unsplash.com/photo-167${item}814026160-2237a95fc5a0`}
                    alt={`Show ${item}`}
                    className="w-full aspect-video object-cover rounded-md group-hover:ring-4 ring-gray-400 transition-all"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600">
                    <div className="w-2/3 h-full bg-red-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular on Netflix */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Popular on Netflix</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[13, 14, 15, 16, 17, 18].map((item) => (
                <div key={item} className="relative group cursor-pointer">
                  <img
                    src={`https://images.unsplash.com/photo-167${item}814026160-2237a95fc5a0`}
                    alt={`Popular ${item}`}
                    className="w-full aspect-[2/3] object-cover rounded-md group-hover:ring-4 ring-gray-400 transition-all"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">TV Shows</a></li>
                <li><a href="#" className="hover:text-white">Movies</a></li>
                <li><a href="#" className="hover:text-white">New & Popular</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white">Cookie Preferences</a></li>
                <li><a href="#" className="hover:text-white">Corporate Information</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Account</a></li>
                <li><a href="#" className="hover:text-white">Media Center</a></li>
                <li><a href="#" className="hover:text-white">Investor Relations</a></li>
                <li><a href="#" className="hover:text-white">Jobs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Gift Cards</a></li>
                <li><a href="#" className="hover:text-white">Media Center</a></li>
                <li><a href="#" className="hover:text-white">Ways to Watch</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p>© 2024 Netflix Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;