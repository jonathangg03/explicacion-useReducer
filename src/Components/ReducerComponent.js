import { useState } from 'react'
import useReducerHook from '../hooks/useReducerHook'

export default function ReducerComponent() {
  const [name, setName] = useState('')
  const { state, dispatch, actions } = useReducerHook()

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <p>Name: {state.name}</p>
      <p>Last name: {state.lastName}</p>
      <br />

      <input
        type='text'
        placeholder='New Name'
        value={name}
        onChange={handleChangeName}
      />
      <button
        onClick={() => dispatch({ type: actions.CHANGE_NAME, payload: name })}
      >
        Change Name
      </button>
      <br />
      <button onClick={() => dispatch({ type: actions.DELETE_LASTNAME })}>
        Delete last name
      </button>
    </>
  )
}
