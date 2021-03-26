import { LoginType, LOGINN_DEFAULT_VALUE } from "."

export const LoginActionTypes = {
    SIGN_IN: "SIGN_IN"
}

const INITIAL_VALUE: LoginType = LOGINN_DEFAULT_VALUE.state

const LoginReducer = (state = INITIAL_VALUE, action) => {
    switch(action.type) {
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
