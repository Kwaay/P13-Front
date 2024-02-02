// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import userReducer from './UserSlice';
import transactionReducer from './TransactionSlice';
import bankAccountReducer from './BankAccountSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    transactions: transactionReducer,
    bankAccounts: bankAccountReducer,
  },
});

export default store;
