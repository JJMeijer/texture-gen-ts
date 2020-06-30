import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { REFRESH_CORE } from '../store/texture/types';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(() => ({
  genButton: {
    padding: '0.5em',
    margin: '0.75em',
  },
}));

export const GenButton: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const generate = () => {
    dispatch({
      type: REFRESH_CORE,
    });
  };

  return (
    <button onClick={generate} className={classes.genButton}>
      generate
    </button>
  );
};
