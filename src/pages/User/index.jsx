import Footer from '../../components/Footer';

import styles from './User.module.css';

export default function User() {
  return (
    <div className={`App ${styles.flex}`}>
      <main className={`bg-dark ${styles.main}`}>
        <div className={styles.header}>
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className={styles['edit-button']}>Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className={styles.account}>
          <div className={styles['account-content-wrapper']}>
            <h3 className={styles['account-title']}>
              Argent Bank Checking (x8349)
            </h3>
            <p className={styles['account-amount']}>$2,082.79</p>
            <p className={styles['account-amount-description']}>
              Available Balance
            </p>
          </div>
          <div className={`cta ${styles['account-content-wrapper']}`}>
            <button className={styles['transaction-button']}>
              View transactions
            </button>
          </div>
        </section>
        <section className={styles.account}>
          <div className={styles['account-content-wrapper']}>
            <h3 className={styles['account-title']}>
              Argent Bank Savings (x6712)
            </h3>
            <p className={styles['account-amount']}>$10,928.42</p>
            <p className={styles['account-amount-description']}>
              Available Balance
            </p>
          </div>
          <div className={`cta ${styles['account-content-wrapper']}`}>
            <button className={styles['transaction-button']}>
              View transactions
            </button>
          </div>
        </section>
        <section className={styles.account}>
          <div className={styles['account-content-wrapper']}>
            <h3 className={styles['account-title']}>
              Argent Bank Credit Card (x8349)
            </h3>
            <p className={styles['account-amount']}>$184.30</p>
            <p className={styles['account-amount-description']}>
              Current Balance
            </p>
          </div>
          <div className={`cta ${styles['account-content-wrapper']}`}>
            <button className={styles['transaction-button']}>
              View transactions
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
