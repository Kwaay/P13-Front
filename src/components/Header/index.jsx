import styles from './Header.module.css';
import img from '../../assets/argentBankLogo.png';

export default function Header() {
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
        {/* <a className={styles['main-nav-item']} href="./user.html">
          <i className="fa fa-user-circle"></i>
          Tony
        </a> */}
        <a className={styles['main-nav-item']} href="./sign-in.html">
          <i className="fa fa-user-circle"></i> Sign In
        </a>
      </div>
    </nav>
  );
}
