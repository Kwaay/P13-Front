// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Account.module.css';

export default function Account({ id, name, balance, info }) {
  return (
    <div className={styles.account}>
      <div className={styles['account-infos']}>
        <p className={styles['account-infos-name']}>{name}</p>
        <span className={styles['account-infos-balance']}>${balance}</span>
        <p className={styles['account-infos-info']}>{info}</p>
      </div>
      <Link to={`/account/${id}`}>
        <button type="submit" className={styles['account-btn']}>
          View transactions
        </button>
      </Link>
    </div>
  );
}
Account.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  balance: PropTypes.number,
  info: PropTypes.string,
};
Account.defaultProps = {
  id: 0,
  name: null,
  balance: 0,
  info: null,
};
