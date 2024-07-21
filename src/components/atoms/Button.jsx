// src/components/atoms/Button.jsx
import React from 'react';

const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`bg-[#E4C000] text-white py-2 px-4 rounded ${className}`}>
      {children}
    </button>
  );
};

export default Button;
