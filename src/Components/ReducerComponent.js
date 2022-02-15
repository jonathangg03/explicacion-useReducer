import { useContext, useState } from 'react'
import StoreContext from '../store/storeProvider'
import { types } from '../store/storeReducer'

export default function ReducerComponent() {
  //AL USAR EL useContext Y PASARLE EL CONTEXTO QUE HEMOS CREADO, ESTO NOS DEVUELVE EL ARRAY QUE COLOCAMOS COMO VALOR POR DEFECTO
  //ESE ARRAY TIENE EL STATE Y EL DISPATCH
  //CUANDO HACEMOS state?.target ESTO INDICA QUE EL ELEMENTO SOLO SE RENDERIZARÁ CUANDO SU VALOR SEA TRUE, DE LO CONTRARIO, SE OMITE
  //EL DISPATCH Y STATE SE USAN DE LA MISMA MANERA
  const [name, setName] = useState('')
  const [state, dispatch] = useContext(StoreContext)

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <p>Name: {state?.name}</p>
      <p>Last name: {state?.lastName}</p>
      <br />

      <input
        type='text'
        placeholder='New Name'
        value={name}
        onChange={handleChangeName}
      />
      <button
        onClick={() => dispatch({ type: types.CHANGE_NAME, payload: name })}
      >
        Change Name
      </button>
      <br />
      <button onClick={() => dispatch({ type: types.DELETE_LAST_NAME })}>
        Delete last name
      </button>
    </>
  )
}
