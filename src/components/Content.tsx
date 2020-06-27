import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { TextureCanvas } from './TextureCanvas';
import { TextureSettings } from './TextureSettings';

import { ContentProps } from '../models';

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

export const Content: React.FC<ContentProps> = (props) => {
  const classes = useStyles();
  const { textureSettings } = props;

  return (
    <Paper variant="outlined">
      <Grid container spacing={2} direction="row" className={classes.root}>
        <Grid item xs={6} className={classes.canvasWrapper}>
          <TextureCanvas setup={textureSettings} />
        </Grid>
        <Grid item xs={6}>
          <TextureSettings />
        </Grid>
      </Grid>
    </Paper>
  );
};

Content.propTypes = {
  textureSettings: PropTypes.shape({
    core: PropTypes.shape({
      palette: PropTypes.arrayOf(
        PropTypes.shape({
          hex: PropTypes.string.isRequired,
          prio: PropTypes.number.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
    size: PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
