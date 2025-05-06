import ErrorResponse from "core/data/remote/error.response.interface";

export default interface LoginResponse extends ErrorResponse {
    token?: string
    name?: string
}