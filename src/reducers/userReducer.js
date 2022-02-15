const initialState = {
  name: 'A'
}

const types = {
  CHANGE_NAME: 'change_name'
}

const userReducer = (state, actions) => {
  switch (actions.type) {
    case types.CHANGE_NAME:
      return {
        ...state,
        name: actions.payload
      }
    default:
      return state
  }
}

export { initialState, types }
export default userReducer
