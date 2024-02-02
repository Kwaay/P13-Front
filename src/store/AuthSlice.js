// eslint-disable-next-line import/no-extraneous-dependencies
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from '../services/AuthService';

export const loginUser = createAsyncThunk('auth/loginUser', async (data) => {
  const { body } = await AuthService.login(data);
  return body.token;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    auth: null,
    error: null,
  },
  reducers: {
    logout: (state, _action) => {
      state.loading = false;
      state.auth = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.auth = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
