import React from 'react';

const Footer = () => (
  <footer className="mt-20 border-t border-zinc-400/20 py-8 text-center">
    <p className="text-sm tracking-wider">
      © {new Date().getFullYear()} Egregore Project
    </p>
  </footer>
);

export default Footer;