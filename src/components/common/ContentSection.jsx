import React from 'react';

export const ContentSection = ({ children, active, className = "" }) => (
  <div
    className={`relative transition-all duration-500 ${
      active ? "opacity-100 translate-y-0" : "opacity-50 translate-y-8 pointer-events-none"
    } ${className}`}
  >
    {children}
  </div>
);