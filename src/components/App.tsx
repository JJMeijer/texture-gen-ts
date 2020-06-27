import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import { Header } from './Header';
import { Content } from './Content';

import { defaultSettings } from './defaultSettings';

export const App: React.FC = () => {
  const [textureSettings, setTextureSettings] = useState(defaultSettings);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header setTextureSettings={setTextureSettings} />
      </Grid>
      <Grid item xs={12}>
        <Content textureSettings={textureSettings} />
      </Grid>
    </Grid>
  );
};
