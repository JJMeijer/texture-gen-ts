import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { Title } from './Title';
import { GenButton } from './GenButton';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper variant="outlined">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
        spacing={2}
      >
        <Grid item xs={5}>
          <Title />
        </Grid>
        <Grid item xs={3}>
          <GenButton />
        </Grid>
      </Grid>
    </Paper>
  );
};
