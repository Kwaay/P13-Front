// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './BankAccount.module.css';

export default function Account({ id, name, balance, info }) {
  return (
    <section className={styles.account}>
      <div className={styles['account-content-wrapper']}>
        <h3 className={styles['account-title']}>{name}</h3>
        <p className={styles['account-amount']}>${balance}</p>
        <p className={styles['account-amount-description']}>{info}</p>
      </div>
      <div className={`${styles.cta} ${styles['account-content-wrapper']}`}>
        <Link to={`/account/${id}`}>
          <button className={styles['transaction-button']}>
            View transactions
          </button>
        </Link>
      </div>
    </section>
  );
}
Account.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  balance: PropTypes.string,
  info: PropTypes.string,
};
Account.defaultProps = {
  id: 0,
  name: null,
  balance: null,
  info: null,
};
