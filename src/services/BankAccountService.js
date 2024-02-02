import MockService from './MockService';
import bankAccounts from '../mocks/bankAccounts';

export default class BankAccountService extends MockService {
  static mockedData = bankAccounts;
}
