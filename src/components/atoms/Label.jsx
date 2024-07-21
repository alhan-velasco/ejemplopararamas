// src/components/atoms/Label.jsx
import React from 'react';

const Label = ({ children, htmlFor, className }) => {
  return (
    <label htmlFor={htmlFor} className={`text-gray-700 ${className}`}>
      {children}
    </label>
  );
};

export default Label;
