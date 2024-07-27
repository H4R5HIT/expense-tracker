import React, { useContext } from 'react'
import { GlobalState } from './GlobalState'


function Balance() {
  const {transaction}= useContext(GlobalState)
  let sum=0.00;
 transaction.map((trans)=>{
  sum = sum + parseFloat(trans.amount) 
 })

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>₹{parseFloat(sum)}</h1>
    </div>
  )
}

export default Balance
