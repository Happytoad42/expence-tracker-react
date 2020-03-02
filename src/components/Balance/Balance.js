import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const getBalance = () => {
    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts);

    const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
    return total;
  };

  return (
    <>
      <h4>Balance</h4>
      <h1>{`$${getBalance()}`}</h1>
    </>
  );
}
