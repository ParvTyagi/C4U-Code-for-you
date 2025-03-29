import React from "react";

export const IconButton = ({ onClick, children, className }) => (
  <button 
    onClick={onClick} 
    className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ${className || ''}`}
  >
    {children}
  </button>
);