import React from 'react';
import Header from '../Header';
import Balance from '../Balance';
import IncomeExpence from '../IncomeExpense';
import TransactionList from '../TransactionList';
import AddTransaction from '../AddTransaction';
import { GlobalProvider } from '../../context/GlobalState';

import './App.css';

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <h1>Hello, World</h1>
      <div className='container'>
        <Balance />
        <IncomeExpence />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
