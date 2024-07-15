import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('income');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: type === 'income' ? +amount : -amount
    }

    addTransaction(newTransaction);
    setText('');
    setAmount(0);
    setType('income');
  }

  return (
    <>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text" className="label-white">Description</label>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Enter transaction details..." 
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount"  className="label-white">Amount</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="Enter amount..." 
          />
        </div>
        <div className="form-control">
          <label  className="label-white">Type </label>
          <div className="radio-group">
            <label  className="label-white">
              <input 
                type="radio" 
                value="income" 
                checked={type === 'income'} 
                onChange={(e) => setType(e.target.value)} 
              />
              Income
            </label>
            <label  className="label-white">
              <input 
                type="radio" 
                value="expense" 
                checked={type === 'expense'} 
                onChange={(e) => setType(e.target.value)} 
              />
              Expense
            </label>
          </div>
        </div>
        <button className="btn">Add {type}</button> 
      </form>
    </>
  )
}
