import React from 'react';

import { Title } from './Title';
import { GenButton } from './GenButton';
import { TextureCanvas } from './TextureCanvas';

import * as css from './App.css';

export const App: React.FC = () => (
  <div className={css.app}>
    <Title />
    <GenButton />
    <TextureCanvas />
  </div>
);
