// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Transaction.module.css';

import { updateTransaction } from '../../store/TransactionSlice';

export default function Transaction({
  id,
  date,
  description,
  amount,
  balance,
  type,
  category,
  note,
}) {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [editNote, setEditNote] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  function toggleOpen() {
    setIsOpen(!isOpen);
  }
  function toggleCategory() {
    setEditCategory(!editCategory);
  }
  function toggleNotes() {
    setEditNote(!editNote);
  }
  const CATEGORIES = ['Food', 'Beverages'];

  return (
    <div className={styles['transaction-data']} data-isopen={isOpen}>
      {!isOpen ? (
        <i className="fa-solid fa-angle-down" onClick={toggleOpen}></i>
      ) : (
        <i className="fa-solid fa-angle-up" onClick={toggleOpen}></i>
      )}
      <span>{date}</span>
      <span>{description}</span>
      <span>${amount}</span>
      <span>${balance}</span>
      {isOpen && (
        <div className={styles['transaction-modify']}>
          <p>Transaction Type: {type}</p>
          {!editCategory ? (
            <p>
              Category: {category}
              <i className="fa-solid fa-pencil" onClick={toggleCategory}></i>
            </p>
          ) : (
            <span>
              <select
                onChange={(e) =>
                  dispatch(updateTransaction({ id, category: e.target.value }))
                }
              >
                {CATEGORIES.map((cat) => (
                  <option value={cat} key={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <i className="fa-solid fa-pencil" onClick={toggleCategory}></i>
            </span>
          )}
          {!editNote ? (
            <p>
              Notes: {note}
              <i className="fa-solid fa-pencil" onClick={toggleNotes}></i>
            </p>
          ) : (
            <span>
              Notes :
              <input
                type="text"
                onChange={(e) =>
                  dispatch(updateTransaction({ id, note: e.target.value }))
                }
                value={note}
              ></input>
              <i className="fa-solid fa-pencil" onClick={toggleNotes}></i>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
Transaction.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  note: PropTypes.string,
};
Transaction.defaultProps = {
  id: 0,
  date: null,
  description: null,
  amount: '0',
  balance: '0',
  type: null,
  category: null,
  note: null,
};
