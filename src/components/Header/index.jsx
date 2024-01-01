// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import img from '../../assets/argentBankLogo.png';

export default function Header({ auth }) {
  return (
    <nav className={styles['main-nav']}>
      <a className={styles['main-nav-logo']} href="./index.html">
        <img
          className={styles['main-nav-logo-image']}
          src={img}
          alt="Argent Bank Logo"
        />
        <h1 className={styles['sr-only']}>Argent Bank</h1>
      </a>
      <div>
        {auth !== null && (
          <a className={styles['main-nav-item']} href="./user.html">
            <i className="fa fa-user-circle"></i>
            Tony
          </a>
        )}
        {auth !== null && (
          <a className={styles['main-nav-item']} href="./logout.html">
            <i className="fa fa-arrow-right-from-bracket"></i>
            Sign out
          </a>
        )}
        {auth === null && (
          <a className={styles['main-nav-item']} href="./sign-in.html">
            <i className="fa fa-user-circle"></i> Sign In
          </a>
        )}
      </div>
    </nav>
  );
}
Header.propTypes = {
  auth: PropTypes.string,
};
Header.defaultProps = {
  auth: null,
};
