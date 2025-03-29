import React from "react";

export const Badge = ({ children, className }) => (
  <span className={`px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 ${className || ''}`}>
    {children}
  </span>
);