import { createContext, useContext, useReducer } from 'react'
import storeReducer, { initialValue } from './storeReducer'

const StoreContext = createContext() //CONTEXTO

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialValue)

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

// EN LUGAR DE EJECUTAR EL useContext EN EL COMPONENTE, LO HAREMOS EN EL CONTEXTO DIRECTAMENTE
// CREAMOS DOS CUSTOM HOOK QUE RETORNEN EL USO DE useContext
// RECORDAR QUE EN LA POSICIÓN 0 ESTA EL STATE, EN LA 1 EL DISPATCH
// EXPORTAMOS CADA HOOK
// TAMBIEN, PODEMOS TENER UN useState, Y USAR EN EL PROVIDER SUS DOS ELEMENTOS, ESTO PASANDOLO AL VALUE
// EL VALUE PUEDE SER UN ARRAY O UN OBJETO, NO HAY PROBLEMA, PERO AL TRAERLO A UN COMPONENTE SI CAMBIARIA

const useStore = () => useContext(StoreContext)[0]
const useDispatch = () => useContext(StoreContext)[1]

export { ContextProvider, useStore, useDispatch }
export default StoreContext
