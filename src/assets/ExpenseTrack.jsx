import React, { useContext } from 'react'
import { GlobalState } from './GlobalState'

function ExpenseTrack() {
  const {transaction} = useContext(GlobalState)
  let income=0;
  let Expense=0;
  transaction.forEach((trans)=>{
    if (trans.amount > 0){
      income=income+parseFloat(trans.amount);
    }
    else{
      Expense=Expense + parseFloat(trans.amount)
    }
  })
  return (
    <div className='exp_container'>
      <div  className='item'>
        <h4>Income</h4>
        <p id='money_plus'className="money plus">
            ₹{parseFloat(income)}
        </p>
      </div>
      <div className='item'>
        <h4>Expense</h4>
        <p id='money_minus'className="money minus">₹{Math.abs(parseFloat(Expense))}</p>
      </div>
    </div>
  )
}

export default ExpenseTrack
