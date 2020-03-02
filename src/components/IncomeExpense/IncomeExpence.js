import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export default function IncomeExpence() {
  const { transactions } = useContext(GlobalContext);

  const getIncome = transactions
    .map(item => item.amount)
    .filter(amount => amount > 0)
    .reduce((item, acc) => item + acc, 0)
    .toFixed(2);

  const getExpense = transactions
    .map(item => item.amount)
    .filter(amount => amount < 0)
    .reduce((item, acc) => item - acc, 0)
    .toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>
          {`+$${getIncome}`}
        </p>
      </div>
      <div>
        <h4>Expence</h4>
        <p id='money-minus' className='money minus'>
          {`-$${getExpense}`}
        </p>
      </div>
    </div>
  );
}
