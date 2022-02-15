import { createContext, useReducer } from 'react'
import storeReducer, { initialValue } from './storeReducer'

const StoreContext = createContext() //CONTEXTO

const ContextProvider = ({ children }) => {
  //PROVIDER DEL CONTEXTO
  //USAMOS EL useReducer, RECORDAR QUE SE LE PASA EL REDUCER Y EL INITIAL VALUES
  //AL VALUE POR DEFAULT DEL PROVIDER LE PASAMOS UN ARRAY CON LO QUE DEVULEVE EL useReducer
  //EXPORTAMOS EL CONTEXT Y EL PROVIDER
  const [state, dispatch] = useReducer(storeReducer, initialValue)

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export { ContextProvider }
export default StoreContext
