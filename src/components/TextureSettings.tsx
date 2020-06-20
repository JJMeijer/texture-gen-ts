import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

export const TextureSettings: React.FC = () => {
  const [colorValue, setColorValue] = useState('');

  const handleChange: void = (color) => {
    setColorValue(color.hex);
  };

  return <ChromePicker color={colorValue} onChange={handleChange} />;
};
