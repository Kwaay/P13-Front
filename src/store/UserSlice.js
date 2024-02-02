// eslint-disable-next-line import/no-extraneous-dependencies
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from '../services/UserService';

export const fetchUserProfile = createAsyncThunk(
  'users/fetchUserProfile',
  async (_, { getState }) => {
    const token = getState().auth.auth;
    const { body: data } = await UserService.getProfile(token);
    return data;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.user = null;
      state.error = null;
    },
    setUser: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      console.log(state, action);
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      // Add user to the state array
      state.user = action.payload;
    });
  },
});

export const { setUser, reset } = userSlice.actions;

export default userSlice.reducer;
