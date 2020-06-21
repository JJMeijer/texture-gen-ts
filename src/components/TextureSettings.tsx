import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import { ChromePicker, ColorResult } from 'react-color';

const useStyles = makeStyles((theme) => ({
  colorCircle: {
    height: theme.spacing(4.5),
    width: theme.spacing(4.5),
    borderRadius: '50%',
    display: 'inline-block',
  },
}));

export const TextureSettings: React.FC = () => {
  const classes = useStyles();

  const [colorValue, setColorValue] = useState('#000000');
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleChange = (color: ColorResult) => {
    setColorValue(color.hex);
  };

  const handleClick = () => {
    setPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };

  return (
    <>
      <span
        className={classes.colorCircle}
        style={{ backgroundColor: colorValue }}
        onClick={handleClick}
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
        <ChromePicker color={colorValue} onChange={handleChange} />
      </Popover>
    </>
  );
};
