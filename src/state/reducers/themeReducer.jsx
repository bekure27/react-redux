
import { SET_THEME, TOGGLE_THEME } from '../action-creator/index';

const themeReducer = (state = 'light', action) => {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    case TOGGLE_THEME:
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

export default themeReducer;
