import styles from './Footer.module.css';

export default function Footer() {
  return (
    // eslint-disable-next-line dot-notation
    <footer className={styles['footer']}>
      <p className={styles['footer-text']}>Copyright 2020 Argent Bank</p>
    </footer>
  );
}
