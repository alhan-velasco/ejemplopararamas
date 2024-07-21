// src/components/atoms/TextInput.jsx
import React from 'react';

const TextInput = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border rounded py-2 px-4 ${className}`}
    />
  );
};

export default TextInput;
