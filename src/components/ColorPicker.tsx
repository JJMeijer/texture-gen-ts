import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Popover from '@material-ui/core/Popover';
import { ChromePicker, ColorResult } from 'react-color';

import { ColorPickerProps, Color } from '../models';

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
  const {
    color: { hex, prio },
    colorIndex,
    setColors,
  } = props;

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [error, setError] = useState(false);

  const handleHexChange = (newHex: string) => {
    setColors((prevState: Color[]) => {
      prevState[colorIndex].hex = newHex;
      return prevState;
    });
  };

  useEffect(() => console.log(hex), [hex, prio]);

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
    return event;
  };

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item className={classes.colorWrapper}>
        <span
          className={classes.colorCircle}
          style={{ backgroundColor: hex }}
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
          <ChromePicker color={hex} onChange={handlePopoverChange} />
        </Popover>
      </Grid>
      <Grid item xs={9} className={classes.textfieldWrapper}>
        <TextField
          error={error}
          label="hex"
          variant="outlined"
          value={hex}
          onChange={handleHexFieldChange}
          helperText={errorText}
          className={classes.textfield}
        />
        <TextField
          variant="outlined"
          value={prio}
          label="prio"
          className={`${classes.textfield} ${classes.textfieldPrio}`}
          onChange={handlePrioFieldChange}
        />
      </Grid>
    </Grid>
  );
};

ColorPicker.propTypes = {
  color: PropTypes.shape({
    hex: PropTypes.string.isRequired,
    prio: PropTypes.number.isRequired,
  }).isRequired,
  colorIndex: PropTypes.number.isRequired,
  setColors: PropTypes.func.isRequired,
};
