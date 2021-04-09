import React from 'react'
import { LoginContextProvider } from '../../../modules/auth/src/data/contexts/login'

const GlobalContext = ({ children }) => {
    return (
        <>
            <LoginContextProvider>
                {children}
            </LoginContextProvider>
        </>
    )
}

export default GlobalContext