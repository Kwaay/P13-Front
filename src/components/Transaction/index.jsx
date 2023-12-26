// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

export default function Transaction({ name, balance, info }) {
  console.log(name, balance, info);
  return (
    <div className={styles.transaction}>
      <div className={styles['transaction-infos']}>
        <p className={styles['transaction-infos-name']}>{name}</p>
        <span className={styles['transaction-infos-balance']}>${balance}</span>
        <p className={styles['transaction-infos-info']}>{info}</p>
      </div>
      <button type="submit" className={styles['transaction-btn']}>
        View transactions
      </button>
    </div>
  );
}
Transaction.propTypes = {
  name: PropTypes.string,
  balance: PropTypes.number,
  info: PropTypes.string,
};
Transaction.defaultProps = {
  name: null,
  balance: 0,
  info: null,
};
