import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BankAccount from '../../components/BankAccount';

import { fetchUserProfile, setUser } from '../../store/UserSlice';
import { getAllBankAccounts } from '../../store/BankAccountSlice';
import styles from './User.module.css';

export default function User() {
  const userState = useSelector((state) => state.user);
  const bankAccountState = useSelector((state) => state.bankAccounts);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userState?.user === null) dispatch(fetchUserProfile());
  }, [userState, dispatch]);

  useEffect(() => {
    if (bankAccountState?.bankAccounts === null) dispatch(getAllBankAccounts());
  }, [bankAccountState, dispatch]);

  const listAccounts = bankAccountState.bankAccounts?.map((account) => (
    <BankAccount {...account} key={account.name} />
  ));
  if (userState?.user === null) return <div>Chargement...</div>;
  return (
    <>
      <main className={`${styles['bg-dark']} ${styles.main}`}>
        <div className={styles.header}>
          <h1>Welcome back</h1>
          {!isEdit ? (
            <>
              <h1>
                {userState.user.firstName} {userState.user.lastName}!
              </h1>
              <button
                className={styles['edit-button']}
                onClick={() => {
                  setIsEdit(!isEdit);
                }}
              >
                Edit Name
              </button>
            </>
          ) : (
            <form
              className={styles['form-container']}
              onSubmit={(e) => {
                e.preventDefault();
                const data = [...e.target]
                  .filter((el) => el instanceof HTMLInputElement)
                  .reduce(
                    (acc, { name, value }) => ({
                      ...acc,
                      [name]: value,
                    }),
                    {},
                  );
                dispatch(setUser({ ...userState.user, ...data }));
                setIsEdit(!isEdit);
              }}
            >
              <div className={styles['form-group']}>
                <input
                  type="text"
                  id="firstname"
                  name="firstName"
                  placeholder={userState.user.firstName}
                  className={styles['form-firstname']}
                />
                <input
                  type="text"
                  id="lastname"
                  name="lastName"
                  placeholder={userState.user.lastName}
                  className={styles['form-lastname']}
                />
              </div>
              <div className={styles['form-group']}>
                <button type="submit">Save</button>
                <button type="submit">Cancel</button>
              </div>
            </form>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <div className={styles.accounts}>{listAccounts}</div>
      </main>
    </>
  );
}
