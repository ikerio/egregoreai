import React from 'react';
import { Terminal } from 'lucide-react';

const Header = ({ scrolled }) => (
  <header
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-zinc-900/80 backdrop-blur-sm' : ''
    }`}
  >
    <nav className="px-4 py-3">
      <div className="text-sm flex items-center space-x-2 text-zinc-400">
        <Terminal className="w-4 h-4" />
        <span className="font-mono">[egregore@system ~]$</span>
      </div>
    </nav>
  </header>
);

export default Header;
