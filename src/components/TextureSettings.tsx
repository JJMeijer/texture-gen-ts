import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { ColorPicker } from './ColorPicker';

import { State, Color, ADD_COLOR } from '../store/texture/types';

export const TextureSettings: React.FC = () => {
  const palette = useSelector((state: State) => state.core.palette);

  const dispatch = useDispatch();
  const addClickHandler = () => {
    dispatch({
      type: ADD_COLOR,
      payload: {
        hex: '#999999',
        prio: 1,
      },
    });
  };

  return (
    <Grid container alignItems="center" direction="column" spacing={2}>
      {palette.map((_color: Color, ind: number) => {
        const key = `$colorPicker-${ind}`;

        return (
          <Grid item xs={12} key={key}>
            <ColorPicker colorIndex={ind} />
          </Grid>
        );
      })}
      <Grid item xs={12}>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <Fab size="medium" color="secondary" onClick={addClickHandler}>
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
