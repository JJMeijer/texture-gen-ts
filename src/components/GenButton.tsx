import React, { Dispatch, SetStateAction } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { Texture } from '../models/Texture';

interface GenButtonProps {
  setTextureSettings: Dispatch<SetStateAction<Texture>>;
}

const useStyles = makeStyles(() => ({
  genButton: {
    padding: '0.5em',
    margin: '0.75em',
  },
}));

export const GenButton: React.FC<GenButtonProps> = (props) => {
  const classes = useStyles();
  const { setTextureSettings } = props;

  const generate = () => {
    setTextureSettings((prevState: Texture) => ({
      ...prevState,
    }));
  };

  return (
    <button onClick={generate} className={classes.genButton}>
      generate
    </button>
  );
};

GenButton.propTypes = {
  setTextureSettings: PropTypes.func.isRequired,
};
