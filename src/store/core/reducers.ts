import { CoreState, CoreActionTypes, ADD_COLOR, UPDATE_COLOR_HEX } from './types';

const initialState: CoreState = {
  palette: [],
  size: {
    width: 400,
    height: 400,
  },
};

export const coreReducer = (state = initialState, action: CoreActionTypes): CoreState => {
  switch (action.type) {
    case ADD_COLOR:
      return {
        palette: [...state.palette, action.payload],
        size: state.size,
      };

    case UPDATE_COLOR_HEX:
      const palette = state.palette;
      palette[action.colorIndex].hex = action.value;
      return {
        palette: palette,
        size: state.size,
      };

    default:
      return state;
  }
};
