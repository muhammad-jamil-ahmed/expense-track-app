import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const TransactionList = () => {
  const { transactions, getTransactions, deleteTransaction } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return (
    <>
      <h4>Transactions</h4>
      <div className="transaction-grid">
        {transactions.map((transaction) => (
          <div key={transaction._id} className={`transaction-item ${transaction.amount < 0 ? 'expense' : 'income'}`}>
            <div className="transaction-details">
              <div className="transaction-icon">
                <i className={`fas fa-${transaction.amount < 0 ? 'minus' : 'plus'}-circle`}></i>
              </div>
              <div className="transaction-text">{transaction.text}</div>
              <div className="transaction-date">24 days ago</div> 
              <div className={`transaction-amount ${transaction.amount < 0 ? 'negative' : 'positive'}`}>
                {transaction.amount < 0 ? '-' : '+'}${numberWithCommas(Math.abs(transaction.amount))}
              </div>
            </div>
            <button 
              onClick={() => deleteTransaction(transaction._id)} 
              className="delete-btn"
              aria-label="Delete Transaction"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
