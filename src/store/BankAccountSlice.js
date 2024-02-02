// eslint-disable-next-line import/no-extraneous-dependencies
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BankAccountService from '../services/BankAccountService';

export const getAllBankAccounts = createAsyncThunk(
  'bankAccount/getAll',
  async (accountId, { getState }) => {
    const token = getState().auth.auth;
    const { body: data } = await BankAccountService.getAll(token, accountId);
    return data;
  },
);

const bankAccountSlice = createSlice({
  name: 'bankAccount',
  initialState: {
    loading: false,
    bankAccounts: null,
    error: null,
  },
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.bankAccounts = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllBankAccounts.fulfilled, (state, action) => {
      // Add bankAccount to the state array
      state.bankAccounts = action.payload;
    });
  },
});

export const { reset } = bankAccountSlice.actions;

export default bankAccountSlice.reducer;
