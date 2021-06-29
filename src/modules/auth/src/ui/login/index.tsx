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

  const logoTmp = "https://i1.wp.com/coisasdogeek.com.br/doc/wp-content/uploads/2016/07/android-logo.png"

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
    <DS.ContainerFlex container center horizontal style={styles.container}>

      <DS.CardView padding={DIMENS.padding} width={40}>
        <DS.CardHeader title="Test" />

        <DS.CardContent>
          <DS.ContainerFlex>
            <img src={logoTmp} style={styles.img} />
            <DS.SpacingField />

            <DS.EditText label="email" />
            <DS.EditText label="senha" type="password" />
          </DS.ContainerFlex>
        </DS.CardContent>

        <DS.CardActions>
          <DS.ContainerFlex center>
            <DS.Button variant="contained">Sign in</DS.Button>
            <DS.SpacingField />
            <DS.Button>Nothing will happen</DS.Button>
          </DS.ContainerFlex>
        </DS.CardActions>
      </DS.CardView>

    </DS.ContainerFlex >
  )
}

const styles = {
  container: {
    background: 'rgba(244,555,234, 0.6)'
  },
  img: {
    width: '50%',
  }
}

export default Login
