import { BlankType, BLANK_DEFAULT_VALUE } from "."

export const LoginActionTypes = {
    CHECK: "CHECK"
}

const INITIAL_VALUE: BlankType = BLANK_DEFAULT_VALUE.state

const LoginReducer = (state = INITIAL_VALUE, action) => {
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
