import

import { ADD_COLOR } from '../constants/ActionTypes';
import { Color } from '../../../models';

const initialState: Color[] = [
  {
    hex: '#999999',
    prio: 1,
  },
];

export const colors = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLOR: {
      return [
        ...state,
        {
          hex: '#999999',
          prio: 1,
        },
      ];
    }

    default:
      return state;
  }
};
