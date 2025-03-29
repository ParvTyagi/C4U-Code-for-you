import React from "react";

export const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className || ''}`}>
    {children}
  </div>
);

export const CardHeader = ({ children, className }) => (
  <div className={`p-4 border-b border-gray-200 ${className || ''}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className || ''}`}>
    {children}
  </div>
);

export const CardDescription = ({ children, className }) => (
  <p className={`text-sm text-gray-500 ${className || ''}`}>
    {children}
  </p>
);

export const CardFooter = ({ children, className }) => (
  <div className={`p-4 border-t border-gray-200 ${className || ''}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className }) => (
  <h3 className={`text-lg font-semibold ${className || ''}`}>
    {children}
  </h3>
);