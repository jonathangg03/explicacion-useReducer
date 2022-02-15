import { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'
import { types } from '../reducers/userReducer'

export default function ReducerComponent() {
  const { store, dispatch } = useContext(UserContext)
  const [nameInput, setNameInput] = useState('')

  const handleInputChange = (e) => {
    setNameInput(e.target.value)
  }

  return (
    <>
      <p>{store.name}</p>
      <br />
      <input type='text' value={nameInput} onChange={handleInputChange}></input>
      <button
        onClick={() =>
          dispatch({ type: types.CHANGE_NAME, payload: nameInput })
        }
      >
        Cambiar nomber
      </button>
    </>
  )
}
