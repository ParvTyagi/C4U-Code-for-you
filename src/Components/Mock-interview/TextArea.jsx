import React from "react";

export const TextArea = ({ value, onChange, placeholder, className }) => (
  <textarea 
    value={value} 
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full border border-gray-300 rounded-md p-2 ${className || ''}`}
  />
);