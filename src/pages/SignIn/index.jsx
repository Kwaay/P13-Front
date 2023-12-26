/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/AuthSlice';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './SignIn.module.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();
    return fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Unable to login');
      })
      .then(({ body }) => {
        dispatch(login(body.token));
        navigate('/user/edit');
      });
  }

  return (
    <div className={`App ${styles.flex}`}>
      <Header />
      <main className={`${styles.main} ${styles.bgdark}`}>
        <section className={styles['sign-in-content']}>
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={submitForm}>
            <div className={styles['input-wrapper']}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className={styles['input-wrapper']}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className={styles['input-remember']}>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button href="./user.html" className={styles['sign-in-button']}>
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
