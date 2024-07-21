// src/components/atoms/Icon.jsx
import React from 'react';

const Icon = ({ name, className }) => {
  return <i className={`icon-${name} ${className}`} />;
};

export default Icon;
