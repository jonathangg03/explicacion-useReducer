import { useReducer } from 'react'

const ACTIONS = {
  CHANGE_NAME: 'change_name',
  DELETE_LASTNAME: 'delete_lastname'
}

const initialState = {
  name: 'Jonathan',
  lastName: 'García'
}

const ACTIONS_REDUCERS = {
  //EN LUGAR DEL SWITCH TENDREMOS UN OBJ DE FUNCIONES
  //CADA ELEMENTO TENDRÁ COMO NOMBRE CADA ACTION, Y COMO VALOR UNA FUNCIÓN CON EL STATE Y EL ACTION
  //CADA FUNCIÓN HARA LO QUE SE HACIA EN CADA CASO DEL SWITCH

  [ACTIONS.CHANGE_NAME]: (state, action) => {
    return {
      ...state,
      name: action.payload
    }
  },
  [ACTIONS.DELETE_LASTNAME]: (state, action) => {
    return {
      ...state,
      lastName: null
    }
  }
}

const reducer = (state, action) => {
  //EL REDUCER LLAMARÁ A ALGUNA DE LAS FUNCIONES DEL OBJETO ANTERIOR, DEPENDIENDO DE SU ACTION.TYPE
  //RETORNAREMOS EL ESTADO SÍ LO ANTERIOR NO TIENE UN VALOR, SÍ NO EXISTE NIGUNA FUNCIÓN CON EL TYPE INGRESADO
  //DE LO CONTRARIO, EJECUTAMOS LA FUNCIÓN TRAÍDA, DANDOLE POR PARAMETRO EL STATE Y EL ACTION
  const actionsReducer = ACTIONS_REDUCERS[action.type]

  return actionsReducer ? actionsReducer(state, action) : state
}

export default function useReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return {
    state,
    actions: ACTIONS,
    changeName: ({ payload }) =>
      dispatch({ type: ACTIONS.CHANGE_NAME, payload }),
    deleteLastName: () => dispatch({ type: ACTIONS.DELETE_LASTNAME })
  }

  //ADICIONALMENTE, YA NO RETORNAMOS TODO EL DISPATCH, SINO FUNCIÓNES QUE EJECUTAN EL DISPATCH, Y QUE LLEVEN EL PAYLOAD POR PARAMETRO
}
