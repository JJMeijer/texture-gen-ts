import React from 'react';

import * as css from './TextureCanvas.css';

console.log('HI from in here');

export const TextureCanvas: React.FC = () => (
  <canvas width="400" height="400" id={css.texture}></canvas>
);
