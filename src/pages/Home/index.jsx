import Feature from '../../components/Feature';
import iconChat from '../../assets/icon-chat.png';
import iconMoney from '../../assets/icon-money.png';
import iconSecurity from '../../assets/icon-security.png';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.hero}>
          <section className={styles['hero-content']}>
            <h2 className="sr-only">Promoted Content</h2>
            <p className={styles.subtitle}>No fees.</p>
            <p className={styles.subtitle}>No minimum deposit.</p>
            <p className={styles.subtitle}>High interest rates.</p>
            <p className={styles.text}>
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className={styles.features}>
          <h2 className="sr-only">Features</h2>
          <Feature
            title="You are our #1 priority"
            img={iconChat}
            imgAlt="Chat Icon"
            description="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
          ></Feature>
          <Feature
            title="More savings means higher rates"
            img={iconMoney}
            imgAlt="Money Icon"
            description="The more you save with us, the higher your interest rate will be!"
          ></Feature>
          <Feature
            title="Security you can trust"
            img={iconSecurity}
            imgAlt="Security Icon"
            description="We use top of the line encryption to make sure your data and money
            is always safe."
          ></Feature>
        </section>
      </main>
    </>
  );
}
