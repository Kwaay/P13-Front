import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import accounts from '../../data/accounts';
import transactions from '../../data/transactions';
import styles from './Transaction.module.css';
import TransactionComponent from '../../components/Transaction';

export default function Transaction() {
  const { accountId } = useParams();
  const [account, setAccount] = useState(null);
  useEffect(() => {
    setAccount(accounts.find(({ id }) => id === Number(accountId)));
  }, [accountId]);
  if (account === null) return <div />;
  const listTransactions = transactions
    .filter((tr) => tr.accountId === Number(accountId))
    .map((transaction) => (
      <TransactionComponent {...transaction} key={transaction.id} />
    ));

  return (
    <div className="App">
      <Header />
      <section className={styles.account}>
        <p className={styles['account-name']}>{account.name}</p>
        <span className={styles['account-balance']}>${account.balance}</span>
        <p className={styles['account-info']}>{account.info}</p>
      </section>
      <section className={styles.transaction}>
        <div className={styles['transaction-infos']}>
          <span>DATE</span>
          <span>DESCRIPTION</span>
          <span>AMOUNT</span>
          <span>BALANCE</span>
        </div>
        <div className={styles['transaction-list']}>{listTransactions}</div>
      </section>
      <Footer />
    </div>
  );
}
