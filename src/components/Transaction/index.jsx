// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Transaction.module.css';

export default function Transaction({
  date,
  description,
  amount,
  balance,
  type,
  category,
  notes,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [notesData, setNotes] = useState(notes);
  const [categoryData, setCategory] = useState(category);
  const [editCategory, setEditCategory] = useState(false);
  const [editNotes, setEditNotes] = useState(false);
  function toggleOpen() {
    setIsOpen(!isOpen);
  }
  function toggleCategory() {
    setEditCategory(!editCategory);
  }
  function toggleNotes() {
    setEditNotes(!editNotes);
  }
  const CATEGORIES = ['Food', 'Beverages'];

  return (
    <div className={styles['transaction-data']} data-isOpen={isOpen}>
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
              Category: {categoryData}
              <i className="fa-solid fa-pencil" onClick={toggleCategory}></i>
            </p>
          ) : (
            <span>
              <select onChange={(e) => setCategory(e.target.value)}>
                {CATEGORIES.map((cat) => (
                  <option value={cat} key={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <i className="fa-solid fa-pencil" onClick={toggleCategory}></i>
            </span>
          )}
          {!editNotes ? (
            <p>
              Notes: {notesData}
              <i className="fa-solid fa-pencil" onClick={toggleNotes}></i>
            </p>
          ) : (
            <span>
              Notes :
              <input
                type="text"
                onChange={(e) => setNotes(e.target.value)}
                value={notesData}
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
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  notes: PropTypes.string,
};
Transaction.defaultProps = {
  date: null,
  description: null,
  amount: 0,
  balance: 0,
  type: null,
  category: null,
  notes: null,
};
