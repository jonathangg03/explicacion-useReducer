import { useState } from 'react'
import { useStore, useDispatch } from '../store/storeProvider'
import { types } from '../store/storeReducer'

export default function ReducerComponent() {
  const [name, setName] = useState('')
  const state = useStore()
  const dispatch = useDispatch()
  //AHORA, EL STATE Y EL DISPATCH LOS SACAMOS DE LOS HOOKS CREADOS
  //YA NO USAMOS AQUI EL useContext

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
