export const LoginActionTypes = {
    LOGIN: "LOGIN_LOGIN"
}

const INITIAL_VALUE = {
    user: {}
}

const LoginReducer = (state = INITIAL_VALUE, action) => {
    switch(action.type) {
        case LoginActionTypes.LOGIN:
            return {
                ...state,
                ...action.payload
            }
        default: 
            return state
    }
}

export default LoginReducer
