import ErrorResponse from "sdk/data/remote/error.response.interface";

export default interface LoginResponse extends ErrorResponse {
    token?: string
    name?: string
}