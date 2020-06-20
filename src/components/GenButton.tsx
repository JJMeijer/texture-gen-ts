import React, { Dispatch, SetStateAction } from 'react';
import PropTypes from 'prop-types';

import { Texture } from '../models/Texture';

import * as css from './GenButton.css';

interface GenButtonProps {
  setTextureSettings: Dispatch<SetStateAction<Texture>>;
}

export const GenButton: React.FC<GenButtonProps> = (props) => {
  const { setTextureSettings } = props;

  const generate = () => {
    setTextureSettings((prevState: Texture) => ({
      ...prevState,
    }));
  };

  return (
    <button onClick={generate} className={css.genButton}>
      generate
    </button>
  );
};

GenButton.propTypes = {
  setTextureSettings: PropTypes.func.isRequired,
};
