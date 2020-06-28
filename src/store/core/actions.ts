import { Color, ADD_COLOR, UPDATE_COLOR_HEX, CoreActionTypes } from './types';

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
