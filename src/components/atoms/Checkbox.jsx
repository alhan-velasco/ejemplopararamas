// src/components/atoms/Checkbox.jsx
import React from 'react';

const Checkbox = ({ checked, onChange, className }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={`form-checkbox ${className}`}
    />
  );
};

export default Checkbox;
