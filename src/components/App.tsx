import React, { useState } from 'react';

import { Title } from './Title';
import { GenButton } from './GenButton';
import { TextureCanvas } from './TextureCanvas';
import { TextureSettings } from './TextureSettings';

import { defaultSettings } from './defaultSettings';

import * as css from './App.css';

export const App: React.FC = () => {
  const [textureSettings, setTextureSettings] = useState(defaultSettings);

  return (
    <div className={css.app}>
      <Title />
      <GenButton setTextureSettings={setTextureSettings} />
      <TextureCanvas setup={textureSettings} />
      <TextureSettings />
    </div>
  );
};
