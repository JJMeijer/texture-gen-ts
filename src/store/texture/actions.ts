import {
  Color,
  ADD_COLOR,
  UPDATE_COLOR_HEX,
  CoreActionTypes,
  UPDATE_COLOR_PRIO,
  REFRESH_CORE,
} from './types';

export const addColor = (newColor: Color): CoreActionTypes => {
  return {
    type: ADD_COLOR,
    payload: newColor,
  };
};

export const updateColorHex = (hexValue: string, colorIndex: number): CoreActionTypes => {
  return {
    type: UPDATE_COLOR_HEX,
    value: hexValue,
    colorIndex: colorIndex,
  };
};

export const updateColorPrio = (prioValue: number, colorIndex: number): CoreActionTypes => {
  return {
    type: UPDATE_COLOR_PRIO,
    value: prioValue,
    colorIndex: colorIndex,
  };
};

export const refreshCore = (): CoreActionTypes => {
  return {
    type: REFRESH_CORE,
  };
};
