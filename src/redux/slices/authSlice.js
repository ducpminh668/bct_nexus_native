import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const jwtDecode = require('jwt-decode');

const initialState = {
  onBoarding: {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    country: null,
    phoneNumber: '',
    pinCode: '',
    fundingMethod: '',
  },
  token: '',
  isTokenReady: false,
  user: {
    exp: null,
    iat: null,
    user: {
      country: '',
      createdAt: '',
      dateOfBirth: '',
      email: '',
      firstName: '',
      fundingMethod: '',
      id: '',
      isActive: null,
      isVerified: null,
      lastName: '',
      nationality: '',
      phoneNumber: '',
      pinCode: 0,
      updatedAt: '',
      username: '',
    },
  },
};
// Async thunk action
export const getTokenFromLocal = createAsyncThunk('auth/getTokenFromLocal', async () => {
  try {
    const token = await AsyncStorage.getItem('@token');
    return token;
  } catch (error) {
    return '';
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    nextStep: (state, action) => {
      state.onBoarding = {
        ...state.onBoarding,
        ...action.payload,
      };
    },
    prevStep: (state, action) => {},
    login: (state, action) => {
      state.token = action.payload;
      state.user = jwtDecode(action.payload);
      AsyncStorage.setItem('@token', action.payload);
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
      AsyncStorage.setItem('@token', '');
    },
  },
  extraReducers: {
    [getTokenFromLocal.pending]: (state, action) => {
      state.isTokenReady = false;
    },
    [getTokenFromLocal.fulfilled]: (state, action) => {
      state.isTokenReady = true;
      state.token = action.payload;
    },
    [getTokenFromLocal.rejected]: (state, action) => {
      state.isTokenReady = true;
    },
  },
});

export const { nextStep, prevStep, login, logout } = authSlice.actions;

export const selectToken = state => state.auth.token;
export const selectIsTokenReady = state => state.auth.isTokenReady;

export default authSlice.reducer;
