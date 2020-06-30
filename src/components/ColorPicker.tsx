import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Popover from '@material-ui/core/Popover';

import { ChromePicker, ColorResult } from 'react-color';

import { State, UPDATE_COLOR_HEX, UPDATE_COLOR_PRIO } from '../store/texture/types';

interface ColorPickerProps {
  colorIndex: number;
}

const useStyles = makeStyles((theme) => ({
  colorCircle: {
    height: theme.spacing(4.5),
    width: theme.spacing(4.5),
    borderRadius: '50%',
    display: 'inline-block',
  },
  colorWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  textfieldWrapper: {
    display: 'inline-flex',
  },
  textfield: {
    margin: theme.spacing(1),
  },
  textfieldPrio: {
    width: '25%',
  },
}));

export const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  const classes = useStyles();
  const { colorIndex } = props;

  const color = useSelector((state: State) => state.core.palette[colorIndex]);

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const handleHexChange = (newHex: string) => {
    dispatch({
      type: UPDATE_COLOR_HEX,
      value: newHex,
      colorIndex,
    });
  };

  const handlePrioChange = (newPrio: number) => {
    dispatch({
      type: UPDATE_COLOR_PRIO,
      value: newPrio,
      colorIndex,
    });
  };

  const handlePopoverChange = (color: ColorResult) => {
    handleHexChange(color.hex);
  };

  const handleColorCircleClick = () => {
    setPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };

  const handleHexFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newHexValue = event.currentTarget.value;
    handleHexChange(newHexValue);

    if (!newHexValue.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
      setError(true);
      setErrorText('This is not a hex color value');
    } else {
      setError(false);
      setErrorText('');
    }
  };

  const handlePrioFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrioValue = parseInt(event.currentTarget.value) || 0;
    handlePrioChange(newPrioValue);
  };

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item className={classes.colorWrapper}>
        <span
          className={classes.colorCircle}
          style={{ backgroundColor: color.hex }}
          onClick={handleColorCircleClick}
        />
        <Popover
          id="simple-popover"
          open={popoverOpen}
          anchorEl={document.getElementsByClassName(classes.colorCircle)[0]}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
        >
          <ChromePicker color={color.hex} onChange={handlePopoverChange} />
        </Popover>
      </Grid>
      <Grid item xs={9} className={classes.textfieldWrapper}>
        <TextField
          error={error}
          label="hex"
          variant="outlined"
          value={color.hex}
          onChange={handleHexFieldChange}
          helperText={errorText}
          className={classes.textfield}
        />
        <TextField
          variant="outlined"
          value={color.prio}
          label="prio"
          className={`${classes.textfield} ${classes.textfieldPrio}`}
          onChange={handlePrioFieldChange}
        />
      </Grid>
    </Grid>
  );
};

ColorPicker.propTypes = {
  colorIndex: PropTypes.number.isRequired,
};
