import { LoginType, LOGINN_DEFAULT_VALUE } from "."
import { IReducerAction } from "sdk/data/context/contracts"

export const LoginActionTypes = {
    SIGN_IN: "SIGN_IN"
}

const INITIAL_VALUE: LoginType = LOGINN_DEFAULT_VALUE.state

const LoginReducer = (state = INITIAL_VALUE, action: IReducerAction) => {
    switch (action.type) {
        case LoginActionTypes.SIGN_IN:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default LoginReducer
