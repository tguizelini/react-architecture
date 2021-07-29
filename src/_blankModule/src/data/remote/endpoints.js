import BASE_URL from "sdk/data/remote/base"

const URL = `${BASE_URL}/todos`

const Endpoints = {
    get: `${URL}`,
    byId: `${URL}/PARAM_ID`
}

export default Endpoints