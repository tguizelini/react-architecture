import BASE_URL from "../../../../../sdk/data/remote/base"

const URL = `${BASE_URL}`

const Endpoints = {
    getOne: `${URL}/user/random`,
    list: `${URL}/users`
}

export default Endpoints