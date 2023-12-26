// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    auth: null,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.auth = action.payload;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
