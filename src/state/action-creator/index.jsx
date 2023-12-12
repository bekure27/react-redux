
import axios from 'axios';

// Action types
export const SET_THEME = 'SET_THEME';
export const TOGGLE_THEME = 'TOGGLE_THEME';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// Theme actions
export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

// Authentication actions
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

// Async action creators using Redux Thunk
export const loginUser = (username, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('http://localhost:5000/login', { username, password });
    if (response.status === 200) {
      dispatch(loginSuccess({ username }));
    }
  } catch (error) {
    console.error('Authentication error:', error.response.data.error);
    dispatch(loginFailure('Authentication failed.'));
  }
};

export const registerUser = (username, password) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post('http://localhost:5000/register', { username, password });
    if (response.status === 201) {
      dispatch(loginUser(username, password)); 
  }}
   catch (error) {
    console.error('Registration error:', error.response.data.error);
    dispatch(registerFailure('Registration failed.'));
  }
};
