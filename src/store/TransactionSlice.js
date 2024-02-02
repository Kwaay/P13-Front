// eslint-disable-next-line import/no-extraneous-dependencies
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TransactionService from '../services/TransactionService';

export const getAllTransactions = createAsyncThunk(
  'transaction/getAll',
  async (accountId, { getState }) => {
    const token = getState().auth.auth;
    const { body: data } = await TransactionService.getAll(token, accountId);
    return data;
  },
);

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    loading: false,
    transactions: null,
    error: null,
  },
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.transactions = null;
      state.error = null;
    },
    addTransaction: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      console.log(state, action);
      state.transactions.push(action.payload);
    },
    updateTransaction: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      console.log(state, action);
      const transactionIndexToUpdate = state.transactions.findIndex(
        (transaction) => transaction.id === action.payload.id,
      );
      console.log(
        transactionIndexToUpdate,
        state.transactions[transactionIndexToUpdate],
      );
      state.transactions[transactionIndexToUpdate] = {
        ...state.transactions[transactionIndexToUpdate],
        ...action.payload,
      };
      console.log(
        transactionIndexToUpdate,
        state.transactions[transactionIndexToUpdate],
      );
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllTransactions.fulfilled, (state, action) => {
      // Add transaction to the state array
      state.transactions = action.payload;
    });
  },
});

export const { addTransaction, updateTransaction, reset } =
  transactionSlice.actions;

export default transactionSlice.reducer;
