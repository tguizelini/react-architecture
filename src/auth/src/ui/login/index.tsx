import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

import DS from 'designSystem'

import backgroundRed from 'sdk/assets/background-red.png'
import StorageHelper from 'sdk/data/storage/storage.helper'
import AppKeys from 'sdk/data/storage/storageKeys'
import DIMENS from 'sdk/values/dimens'

import HttpStatus from 'sdk/hooks/useApi/httpStatus.enum'
import useApi from 'sdk/hooks/useApi'
import HttpMethod from 'sdk/hooks/useApi/httpMethod.enum'

import { unmaskNumberFields, cpfMask } from 'sdk/utils/mask.utils'

import Endpoints from '../../data/remote/endpoints'
import LoginPayload from '../../domain/payload/login.payload'
import LoginResponse from '../../domain/response/login.response'
import { useDispatch } from 'react-redux'
import UserReducer from '../../data/store/reducers/user.reducer'

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const apiLogin = useApi<LoginResponse>(
    Endpoints.login,
    HttpMethod.POST
  )

  const [modalShow, setModalShow] = useState(false)
  const [modalMessage, setModalMessage] = useState("")

  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    StorageHelper.remove(AppKeys.TOKEN)
    StorageHelper.remove(AppKeys.USER_NAME)
  }, [])

  const checkIsFormValid = () => {
    if (cpf.trim() == "" || password.trim() == "") {
      return false
    }

    return true
  }

  const onSignClick = async (e: any) => {
    const isFormValid = checkIsFormValid()

    if (!isFormValid) {
      setModalMessage('Fill all the fields')
      setModalShow(true)
      return
    }

    const payload: LoginPayload = {
      login: unmaskNumberFields(cpf),
      password: password,
    }

    const response = await apiLogin.callApi(payload)

    if (response?.status == HttpStatus.SUCCESS) {
      StorageHelper.set(AppKeys.TOKEN, response.data?.token)
      StorageHelper.set(AppKeys.USER_NAME, response.data?.name)

      setModalMessage("Let's go!")
      setModalShow(true)

      //usig redux hook
      dispatch({
        type: UserReducer.ActionTypes.SET_NAME,
        payload: response.data?.name
      })

      history.push("/dashboard")

      return
    }

    const errorMsg = response.data?.message || "Error on check credentials"
    setModalMessage(errorMsg)
    setModalShow(true)
  }

  const onForgetPasswordClick = () => alert("open passwordd recovery screen")

  return (
    <DS.ContainerFlex container center horizontal backgroundImage={backgroundRed}>
      <DS.Loading status={apiLogin.loading} />

      <DS.ModalApp
        open={modalShow}
        message={modalMessage}
        onClose={() => setModalShow(false)}
      />

      <DS.CardView responsiveWidth={true} padding={DIMENS.padding} widthInPixel={400}>
        <DS.CardContent>
          <DS.ContainerFlex center>
            <DS.Logo sizeInPixel={80} />
          </DS.ContainerFlex>

          <DS.SpacingField bottom={DIMENS.fieldSpacing * 2} />

          <DS.Typography variant="h2" align="center">My beautiful message</DS.Typography>

          <DS.SpacingField />
          <DS.SpacingField />

          <DS.ContainerFlex >
            <DS.EditText label="CPF" value={cpf} maxLength={14} onChange={(e) => setCpf(cpfMask(e))} />
            <DS.EditText label="Password" type="password" value={password} onChange={setPassword} />

            <DS.SpacingField />
            <DS.SpacingField />

            <DS.Button fullWidth variant="contained" onClick={onSignClick}>SIGN IN</DS.Button>
            <DS.SpacingField />
            <DS.Button fullWidth onClick={onForgetPasswordClick}>Forgot password</DS.Button>
          </DS.ContainerFlex>
        </DS.CardContent>
      </DS.CardView>

    </DS.ContainerFlex>
  )
}

export default Login