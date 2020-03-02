import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Transaction from '../Transaction';

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h4>History</h4>
      <ul id='list' className='list'>
        {transactions.map(transaction => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </ul>
    </>
  );
}
