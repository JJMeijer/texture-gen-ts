import React from 'react';

import { Title } from './Title';
import { GenButton } from './GenButton';
import { TextureCanvas } from './TextureCanvas';

import { Texture } from '../models/Texture';

import * as css from './App.css';

const defaultSettings: Texture = {
  core: {
    palette: [
      {
        hex: '#123456',
        prio: 100,
      },
      {
        hex: '#e43fda',
        prio: 10,
      },
    ],
  },
  size: {
    height: 400,
    width: 400,
  },
};

export const App: React.FC = () => (
  <div className={css.app}>
    <Title />
    <GenButton />
    <TextureCanvas setup={defaultSettings} />
  </div>
);
