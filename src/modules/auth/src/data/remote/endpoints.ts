import BASE_URL from "../../../../../core/data/remote/base"

const URL = `${BASE_URL}/auth`

const Endpoints = {
    login: `${URL}/`,
    passwordRecovery: `${URL}/password-recovery`
}

export default Endpoints