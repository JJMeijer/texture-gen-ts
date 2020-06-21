import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { Title } from './Title';
import { GenButton } from './GenButton';
import { TextureCanvas } from './TextureCanvas';
import { TextureSettings } from './TextureSettings';

import { defaultSettings } from './defaultSettings';

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export const App: React.FC = () => {
  const classes = useStyles();
  const [textureSettings, setTextureSettings] = useState(defaultSettings);

  return (
    <Grid container className={classes.app} spacing={2}>
      <Grid item xs={12} className={classes.header}>
        <Title />
      </Grid>
      <Grid item xs={12} className={classes.content}>
        <GenButton setTextureSettings={setTextureSettings} />
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
          <TextureCanvas setup={textureSettings} />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <TextureSettings />
        </Paper>
      </Grid>
    </Grid>
  );
};
