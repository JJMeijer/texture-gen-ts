import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { ColorPicker } from './ColorPicker';

export const TextureSettings: React.FC = () => {
  const [colors, setColors] = useState([
    {
      hex: '#000000',
      prio: 1,
    },
  ]);

  return (
    <Grid container alignItems="center" direction="column" spacing={2}>
      <Grid item xs={12}>
        <ColorPicker />
      </Grid>
      <Grid item xs={12}>
        <ColorPicker />
      </Grid>
      <Grid item xs={12}>
        <ColorPicker />
      </Grid>
      <Grid item xs={12}>
        <ColorPicker />
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <Fab size="medium" color="secondary">
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
