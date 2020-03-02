import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export default function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      // Never tell me the odds, Chewie
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add transaction</h3>
      <form action='POST' id='form' onSubmit={onSubmit}>
        <label htmlFor='text'>Text</label>
        <input
          type='text'
          id='text'
          placeholder='Enter text...'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <div className='form-control'>
          <label htmlFor='amout'>
            Amount
            <br />
            (negative-expense, positive - income)
          </label>
          <input
            id='amount'
            type='number'
            placeholder='Enter amount...'
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
}
