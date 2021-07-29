import IReduxAction from "sdk/data/store/action.interface"
import User from "_blankModule/src/domain/user"

//Action Types
const ActionTypes = {
  SET_NAME: "BLANK_SET_NAME",
  RESET: "BLANK_RESET"
}

//Initial value of the Reducer
const INITIAL_STATE: User = {
  id: null,
  name: ""
}

//Reducer check if his any action types was called
const Reducer = (state = INITIAL_STATE, action: IReduxAction) => {
  switch (action.type) {
    case ActionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload
      }

    case ActionTypes.RESET:
      return {
        id: null,
        name: ""
      }

    default:
      return state
  }
}

//Do not forget to change this name...
const BlankReducer = { Reducer, ActionTypes }
export default BlankReducer