// authReducer.js
import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from '../action-creator/index';

const authReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authReducer;
