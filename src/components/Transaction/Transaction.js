import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const Transaction = ({ transaction: { id, text, amount } }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li key={id} className={amount < 0 ? 'minus' : 'plus'}>
      {text} <span>{amount < 0 ? `-$${Math.abs(amount)}` : `+$${amount}`}</span>
      <button className='delete-btn' onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
