import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { Title } from './Title';
import { GenButton } from './GenButton';

import { HeaderProps } from '../models';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export const Header: React.FC<HeaderProps> = (props) => {
  const classes = useStyles();
  const { setTextureSettings } = props;

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
          <GenButton setTextureSettings={setTextureSettings} />
        </Grid>
      </Grid>
    </Paper>
  );
};

Header.propTypes = {
  setTextureSettings: PropTypes.func.isRequired,
};
