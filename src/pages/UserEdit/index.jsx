/* eslint-disable dot-notation */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Account from '../../components/Account';
import store from '../../store';
import accountsData from '../../data/accounts';
import styles from './UserEdit.module.css';
import { addUser } from '../../store/UserSlice';

export default function UserEdit() {
  const [user, setUser] = useState(store.getState().user);
  const dispatch = useDispatch();

  const listAccounts = accountsData.map((account) => (
    <Account {...account} key={account.name} />
  ));

  useEffect(() => {
    const token = store.getState().auth.auth;
    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Unable to get user data');
      })
      .then(({ body }) => {
        dispatch(addUser(body));
        setUser(body);
      });
  }, []);
  return (
    <div className="App">
      <Header auth={store.getState().auth.auth} />
      <main className={styles['container']}>
        <div className={styles['user-modify']}>
          <h1>Welcome back</h1>
          <form className={styles['form-container']}>
            <div className={styles['form-group']}>
              <input
                type="text"
                id="firstname"
                placeholder={user.firstName}
                className={styles['form-firstname']}
              />
              <input
                type="text"
                id="lastname"
                placeholder={user.lastName}
                className={styles['form-lastname']}
              />
            </div>
            <div className={styles['form-group']}>
              <button type="submit">Save</button>
              <button type="submit">Cancel</button>
            </div>
          </form>
        </div>
        <div className={styles['accounts']}>{listAccounts}</div>
      </main>
      <Footer />
    </div>
  );
}
