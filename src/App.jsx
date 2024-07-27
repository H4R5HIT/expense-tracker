import { useContext, useState } from 'react'
import './App.css'
import Header from './assets/Header'
import Balance from './assets/Balance'
import ExpenseTrack from './assets/ExpenseTrack'
import History from './assets/History'
import TransactionAdd from './assets/TransactionAdd'
import { GlobalProvider } from './assets/GlobalState'
function App() {
  const [count, setCount] = useState(0)
  

  return (
    
    <GlobalProvider>
    <div className="container">
    <Header/>
    <Balance/>
    <ExpenseTrack/>
    <History/>
    <TransactionAdd/>
     </div>
    </GlobalProvider>
    
  )
}

export default App
