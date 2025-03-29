import React from "react";

export const Select = ({ options, value, onChange, className }) => (
  <select 
    value={value} 
    onChange={(e) => onChange(e.target.value)}
    className={`block w-full border border-gray-300 rounded-md p-2 ${className || ''}`}
  >
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);