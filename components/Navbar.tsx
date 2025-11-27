import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-[#0f172a] text-white shadow-lg">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScroll('home')}>
          <span className="text-xl md:text-2xl font-bold tracking-wide">মিয়া নুরুদ্দিন অপু</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-brand transition-colors text-sm lg:text-base"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block bg-brand hover:bg-brand-dark text-white px-6 py-2 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          সমর্থন দিন
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1e293b] p-4 absolute w-full border-t border-slate-700 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-left py-2 border-b border-slate-700 text-slate-300 hover:text-white hover:pl-2 transition-all"
              >
                {item.label}
              </button>
            ))}
            <button className="bg-brand text-white w-full py-3 rounded-lg font-bold mt-2">
              সমর্থন দিন
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;