import { createContext, useReducer } from 'react'
import userReducer, { initialState } from '../reducers/userReducer'

const Context = createContext()

const ContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(userReducer, initialState)
  return (
    <Context.Provider value={{ store, dispatch }}>{children}</Context.Provider>
  )
}

export { ContextProvider }
export default Context
