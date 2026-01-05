import React from 'react';
import { NAV_LINKS } from '../constants';
import { Search, Command } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="w-6 h-6 bg-white flex items-center justify-center group-hover:bg-gray-200 transition-colors">
            <div className="w-2 h-2 bg-black"></div>
          </div>
          <span className="font-heading font-bold text-white tracking-tight">HostNavigator</span>
        </a>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-xs font-mono text-gray-400 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-bg-panel border border-border px-3 py-1.5 gap-2 w-64 text-gray-500">
            <Search size={14} />
            <span className="text-xs font-mono">Search providers...</span>
            <span className="ml-auto text-[10px] border border-border px-1 rounded flex items-center gap-1">
                <Command size={10} />K
            </span>
          </div>
          <a href="mailto:submit@hostnavigator.com" className="text-sm font-medium bg-white text-black px-4 py-1.5 hover:bg-gray-200 transition-colors">
            Submit Provider
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;