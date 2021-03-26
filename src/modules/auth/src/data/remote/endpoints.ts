import BASE_URL from "../../../../../core/data/remote/base"

const URL = `${BASE_URL}/auth`

const AuthEndpoints = {
    login: `${URL}/`,
    passwordRecovery: `${URL}/password-recovery`
}

export default AuthEndpoints