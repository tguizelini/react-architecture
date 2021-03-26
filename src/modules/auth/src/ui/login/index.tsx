import React from 'react'
import { useHistory } from 'react-router-dom'
import useApi from '../../../../../core/hooks/useApi'
import HttpMethod from '../../../../../core/hooks/useApi/httpMethod.enum'
import HttpStatus from '../../../../../core/hooks/useApi/httpStatus.enum'
import AuthEndpoints from '../../data/remote/endpoints'
import LoginPayload from '../../domain/payloads/login.payload'
import LoginResponse from '../../domain/responses/login.response'

import * as St from './styles'

const Login = () => {
  let history = useHistory()
  const api = useApi<LoginResponse>(AuthEndpoints.login, HttpMethod.POST)

  const signInNavigation = async () => history.push("/proposal")
  
  const signIn = async () => {
    const payload: LoginPayload = {
      login: 'silvio.santos',
      password: 'barrasDeOuro'
    }

    const response = await api.callApi(payload)

    console.log('response -> ', response)

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
        <button onClick={signIn}>LOGIN</button>
      </St.MyOwnContainer>
  )   
}

export default Login
