import {
  Color,
  Core,
  CoreActionTypes,
  ADD_COLOR,
  UPDATE_COLOR_HEX,
  UPDATE_COLOR_PRIO,
  REFRESH_CORE,
} from './types';

const initialState: Core = {
  palette: [],
  size: {
    width: 400,
    height: 400,
  },
};

export default (state = initialState, action: CoreActionTypes): Core => {
  switch (action.type) {
    case ADD_COLOR:
      return {
        palette: [...state.palette, action.payload],
        size: state.size,
      };

    case UPDATE_COLOR_HEX:
      return {
        ...state,
        palette: state.palette.map((color: Color, colorIndex: number) => {
          if (colorIndex === action.colorIndex) {
            return {
              ...color,
              hex: action.value,
            };
          }
          return color;
        }),
      };

    case UPDATE_COLOR_PRIO:
      return {
        ...state,
        palette: state.palette.map((color: Color, colorIndex: number) => {
          if (colorIndex === action.colorIndex) {
            return {
              ...color,
              prio: action.value,
            };
          }
          return color;
        }),
      };

    case REFRESH_CORE:
      return {
        ...state,
        palette: state.palette.map((color: Color) => {
          return color;
        }),
      };

    default:
      return state;
  }
};
