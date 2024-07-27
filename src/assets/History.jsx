import React, { useContext } from 'react'
import { GlobalState } from './GlobalState'
import Transaction from './Transaction'


const History = () => {
const {transaction} = useContext(GlobalState)
  return (
    <div className='hist'>
       <h3>History</h3>
       {transaction.map((trans)=>{
        return(
          <Transaction trans={trans} key={trans.id}/>
        )
       })}
      
    </div>
  )
}

export default History
