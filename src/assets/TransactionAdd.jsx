import React, { useContext, useState } from 'react'
import { GlobalState } from './GlobalState';

const TransactionAdd = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useContext(GlobalState)

  const onClickAdd = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount
    }
    addTransaction(newTransaction)
    setText('');
    setAmount(0)
  }
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor='text'>Text</label>
          <input type="text" id='text' value={text} placeholder='Enter Text ...' onChange={(e) => { setText(e.target.value) }} />
        </div>
        <div className="form-conrol">
          <label htmlFor='amount'>Amount<br />
            (Negative-Expense,Positive-Income)
          </label>
          <input type="number" id='amount' value={amount} placeholder='0' onChange={(e) => { setAmount(e.target.value) }} />
        </div>
        <button className='btn' onClick={onClickAdd }>Add Transaction</button>
      </form>
    </div>
  )
}

export default TransactionAdd
