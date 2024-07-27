

export const appReducer = (state,action)=>{
    switch (action.type) {
            
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transaction : state.transaction.filter(trans=>trans.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transaction : [...state.transaction,action.payload]
            }
        
        default:
                return state;
    z
       
    }
}