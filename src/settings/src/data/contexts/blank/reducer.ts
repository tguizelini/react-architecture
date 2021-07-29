import { BlankType, BLANK_DEFAULT_VALUE } from "."
import { IReducerAction } from "sdk/data/context/contracts"

export const LoginActionTypes = {
    CHECK: "CHECK"
}

const INITIAL_VALUE: BlankType = BLANK_DEFAULT_VALUE.state

const LoginReducer = (state = INITIAL_VALUE, action: IReducerAction) => {
    switch (action.type) {
        case LoginActionTypes.CHECK:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default LoginReducer
