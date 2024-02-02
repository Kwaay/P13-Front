import MockService from './MockService';
import transactions from '../mocks/transactions';

export default class TransactionService extends MockService {
  static mockedData = transactions;
}
