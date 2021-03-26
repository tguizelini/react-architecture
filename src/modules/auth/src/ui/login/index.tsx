import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import useApi from '../../../../../core/hooks/useApi'
import HttpMethod from '../../../../../core/hooks/useApi/httpMethod.enum'
import HttpStatus from '../../../../../core/hooks/useApi/httpStatus.enum'
import LoginContext from '../../data/contexts/login'
import AuthEndpoints from '../../data/remote/endpoints'
import LoginPayload from '../../domain/payloads/login.payload'
import LoginResponse from '../../domain/responses/login.response'

import * as St from './styles'

const Login = () => {
  const history = useHistory()
  const context = useContext(LoginContext)
  const api = useApi<LoginResponse>(AuthEndpoints.login, HttpMethod.POST)
  
  const signIn = async () => {
    const payload: LoginPayload = {
      login: 'silvio.santos',
      password: 'barrasDeOuro'
    }

    const response = await api.callApi(payload)

    if (response.status == HttpStatus.SUCCESS) {
      alert('ok -> ' + String(api.data))
    } else {
      alert('error')
    }

    history.push("/proposal")
  }

  return (
      <St.MyOwnContainer color='blue'>
        <span>LOGIN</span>
        <br/>
        <span>Name: {context.state.name}</span>
        <br/>
        <br/>
        <button onClick={signIn}>LOGIN</button>
      </St.MyOwnContainer>
  )   
}

export default Login
