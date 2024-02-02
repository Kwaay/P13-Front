// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './Header.module.css';
import img from '../../assets/argentBankLogo.png';

import { logout } from '../../store/AuthSlice';
import { reset as userReset } from '../../store/UserSlice';
import { reset as transactionReset } from '../../store/TransactionSlice';
import { reset as bankAccountReset } from '../../store/BankAccountSlice';

export default function Header({ auth, name }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logoutUser() {
    dispatch(logout());
    dispatch(userReset());
    dispatch(transactionReset());
    dispatch(bankAccountReset());
    navigate('/sign-in');
  }
  return (
    <header>
      <nav className={styles['main-nav']}>
        <Link to="/" className={styles['main-nav-logo']}>
          <img
            className={styles['main-nav-logo-image']}
            src={img}
            alt="Argent Bank Logo"
          />
          <h1 className={styles['sr-only']}>Argent Bank</h1>
        </Link>
        <div>
          {auth !== null ? (
            <>
              <Link to="/user" className={styles['main-nav-item']}>
                <i className="fa fa-user-circle"></i>
                {name}
              </Link>
              <Link className={styles['main-nav-item']} onClick={logoutUser}>
                <i className="fa fa-arrow-right-from-bracket"></i>
                Sign out
              </Link>
            </>
          ) : (
            <Link to="/sign-in" className={styles['main-nav-item']}>
              <i className="fa fa-user-circle"></i> Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
Header.propTypes = {
  auth: PropTypes.string,
  name: PropTypes.string,
};
Header.defaultProps = {
  auth: null,
  name: null,
};
