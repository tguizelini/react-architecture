import React, { createContext, useState } from 'react'
import PropsContext from '../../../../../../core/data/context/propsContext'

export type LoginType = {
    login: string
    password: string
    name: string
}

export const LOGINN_DEFAULT_VALUE: PropsContext<LoginType> = {
    state: {
        login: 'tiago.guizelini',
        name: 'Tiago Guizelini',
        password: '123'
    },
    setState: () => {}
}

const LoginContext = createContext<PropsContext<LoginType>>(LOGINN_DEFAULT_VALUE)

const LoginContextProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(LOGINN_DEFAULT_VALUE.state)

    return (
      <LoginContext.Provider
        value={{
          state,
          setState,
        }}
      >
        {children}
      </LoginContext.Provider>
    )
  }

export { LoginContextProvider }
export default LoginContext
