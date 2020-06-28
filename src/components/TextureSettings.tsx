import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { ColorPicker } from './ColorPicker';

import { Color } from '../models';

export const TextureSettings: React.FC = () => {
  const [colors, setColors] = useState([
    {
      hex: '#999999',
      prio: 1,
    },
  ]);

  const addColor = () => {
    setColors((prevColors) => [
      ...prevColors,
      {
        hex: '#999999',
        prio: 1,
      },
    ]);
  };

  return (
    <Grid container alignItems="center" direction="column" spacing={2}>
      {colors.map((color: Color, ind: number) => {
        const { hex, prio } = color;
        const key = `${hex}-${prio}-${ind}`;
        console.log('new map', color.hex);
        console.log('colors', colors);
        return (
          <Grid item xs={12} key={key}>
            <ColorPicker color={color} colorIndex={ind} setColors={setColors} />
          </Grid>
        );
      })}
      <Grid item xs={12}>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <Fab size="medium" color="secondary" onClick={addColor}>
              <AddIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab size="medium">
              <RemoveIcon />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
