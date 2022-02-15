import { useReducer } from 'react'

const ACTIONS = {
  //CONSTANTE CON NOMBRES POSIBLES PARA LOS ACTION.PAYLOAD
  CHANGE_NAME: 'change_name',
  DELETE_LASTNAME: 'delete_lastname'
}

const initialState = {
  //ESTADO INICIAL DEL REDUCER, VALORES INICIALES
  name: 'Jonathan',
  lastName: 'García'
}

const reducer = (state, action) => {
  //DEFINIMOS LO QUE HARA SEGÚN EL ACTION.PAYLOAD
  //AL DAR UN OBJETO COMO PARAMETRO AL DISPATCH, SUS ELEMENTOS VENDRÁN EN EL ACTION
  switch (action.type) {
    case ACTIONS.DELETE_LASTNAME:
      return {
        ...state,
        lastName: null
      }
    case ACTIONS.CHANGE_NAME:
      return {
        ...state,
        name: action.payload
        //EN CASO DE REQUERIR UN PAYLOAD, LO SACAMOS TAMBIEN DEL OBJETO DEL DISPATCH
      }
    default:
      return state
  }
}

export default function useReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState)
  //EL STATE TIENE LOS DATOS A USAR, LOS INICIALES SON LOS QUE SE COLOQUEN AL useReducer COMO 2DO PARAM.
  //EL DISPATCH ES UN METODO QUE SE USARÁ PARA ACTIVAR LOS ACTIONS

  return {
    state,
    dispatch,
    actions: ACTIONS
  }
}
