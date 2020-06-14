import React from 'react';

import { Title } from './Title';
import { GenerateButton } from './GenerateButton';
import { TextureCanvas } from './TextureCanvas';

import './App.css';

export const App: React.FC = () => (
  <>
    <Title />
    <GenerateButton />
    <TextureCanvas />
  </>
);
