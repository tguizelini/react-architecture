import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import useApi from '../../../../../core/hooks/useApi'
import HttpMethod from '../../../../../core/hooks/useApi/httpMethod.enum'
import HttpStatus from '../../../../../core/hooks/useApi/httpStatus.enum'
import DIMENS from '../../../../../core/values/dimens'
import DS from '../../../../design-system'
import LoginContext from '../../data/contexts/login'
import Endpoints from '../../data/remote/endpoints'
import LoginPayload from '../../domain/payloads/login.payload'
import LoginResponse from '../../domain/responses/login.response'

const Login = () => {
  const history = useHistory()
  const context = useContext(LoginContext)
  const api = useApi<LoginResponse>(Endpoints.login, HttpMethod.POST)

  const signIn = async () => {
    /*
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
    */

    history.push("/profile")
  }

  return (
    <DS.ContainerFlex container center>

      <DS.ContainerFlex width={50}>
        <DS.Paper>
          <DS.ContainerFlex padding={DIMENS.padding} center>
            <span>LOGIN</span>
            <br />
            <span>Name: {context.state.name}</span>
            <br />
            <DS.EditText label="test" />
            <DS.Button color="primary" disabled variant="contained" onClick={signIn}>Entrar</DS.Button>
            <DS.Button color="primary" onClick={signIn}>Text</DS.Button>
            <DS.Button color="secondary" variant="contained" onClick={signIn}>Text</DS.Button>
          </DS.ContainerFlex>
        </DS.Paper>
      </DS.ContainerFlex>

    </DS.ContainerFlex>
  )
}

export default Login
