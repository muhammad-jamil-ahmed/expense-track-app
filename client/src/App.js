import React from 'react';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="left-panel">
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
        </div>
        <div className="right-panel">
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
