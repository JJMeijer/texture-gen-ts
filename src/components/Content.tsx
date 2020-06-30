import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { TextureCanvas } from './TextureCanvas';
import { TextureSettings } from './TextureSettings';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  canvasWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const Content: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper variant="outlined">
      <Grid container spacing={2} direction="row" className={classes.root}>
        <Grid item xs={6} className={classes.canvasWrapper}>
          <TextureCanvas />
        </Grid>
        <Grid item xs={6}>
          <TextureSettings />
        </Grid>
      </Grid>
    </Paper>
  );
};
