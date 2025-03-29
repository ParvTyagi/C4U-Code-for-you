import React from 'react';

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={`px-4 py-2 font-semibold rounded-lg shadow-md cursor-pointer ${className}`} {...props}>
      {children}
    </button>
  );
}