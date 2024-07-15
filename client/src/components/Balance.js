import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="balance-container">
      <h2 className="title">Expense Tracker</h2>
      <h5>Total Balance:  ${numberWithCommas(total)}</h5>
      
    </div>
  )
}
