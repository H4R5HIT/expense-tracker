import React, { useContext } from 'react'
import { GlobalState } from './GlobalState';

const Transaction = ({trans}) => {
    const {deleteTransaction} =useContext(GlobalState)
    
        const sign = trans.amount < 0 ? '-' :'+';
  return (
    <ul id="list" className="list" >
    <li className={sign==='+'?'plus':'minus'} >
      {trans.text} <span>{sign}₹{Math.abs(trans.amount)}</span><button className="delete-btn" onClick={()=>deleteTransaction(trans.id)} >x</button>
    </li> 
  </ul>
  )
}

export default Transaction
