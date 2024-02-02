import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Transaction.module.css';
import TransactionComponent from '../../components/Transaction';

import { getAllTransactions } from '../../store/TransactionSlice';

export default function Transaction() {
  const bankAccountState = useSelector((state) => state.bankAccounts);
  const transactionState = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  const { accountId } = useParams();
  const [account, setAccount] = useState(null);
  useEffect(() => {
    setAccount(
      bankAccountState.bankAccounts?.find(({ id }) => id === Number(accountId)),
    );
  }, [accountId]);
  useEffect(() => {
    if (transactionState?.transactions === null)
      dispatch(getAllTransactions(accountId));
  }, [transactionState]);
  if (account === null) return <div />;
  const listTransactions = transactionState?.transactions.map((transaction) => (
    <TransactionComponent {...transaction} key={transaction.id} />
  ));

  return (
    <>
      <main>
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
      </main>
    </>
  );
}
