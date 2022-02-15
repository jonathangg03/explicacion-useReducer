//AQUI ESTARÁN LOS TYPES (O ACTIONS POSIBLES), EL INITIAL VALUE, Y LOS REDUCERS
//DEBEMOS EXPORTAR EL REDUCER OBLIGATORIAMENTE

const types = {
  CHANGE_NAME: 'change_name',
  DELETE_LAST_NAME: 'delete_last_name'
}

const initialValue = {
  name: 'Jonathan',
  lastName: 'García'
}

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.CHANGE_NAME:
      return {
        ...state,
        name: action.payload
      }
    case types.DELETE_LAST_NAME:
      return {
        ...state,
        lastName: null
      }
    default:
      return state
  }
}

export { initialValue, types }
export default storeReducer
