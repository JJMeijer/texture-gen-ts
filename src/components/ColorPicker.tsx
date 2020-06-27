import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Popover from '@material-ui/core/Popover';
import { ChromePicker, ColorResult } from 'react-color';

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
}));

export const ColorPicker: React.FC = () => {
  const classes = useStyles();

  const [colorValue, setColorValue] = useState('#000000');
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [error, setError] = useState(false);

  const handlePopoverChange = (color: ColorResult) => {
    setColorValue(color.hex);
  };

  const handleColorCircleClick = () => {
    setPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };

  const handleTextfieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setColorValue(newValue);

    if (!newValue.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
      setError(true);
      setErrorText('This is not a hex color value');
    } else {
      setError(false);
      setErrorText('');
    }
  };

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item className={classes.colorWrapper}>
        <span
          className={classes.colorCircle}
          style={{ backgroundColor: colorValue }}
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
          <ChromePicker color={colorValue} onChange={handlePopoverChange} />
        </Popover>
      </Grid>
      <Grid item xs={9}>
        <TextField
          error={error}
          label="hex"
          variant="outlined"
          value={colorValue}
          onChange={handleTextfieldChange}
          helperText={errorText}
        />
      </Grid>
    </Grid>
  );
};
