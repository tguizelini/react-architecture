import React from 'react'
import { LoginContextProvider } from 'auth/src/data/contexts/login'

const GlobalContext: React.FC = ({ children }) => {
    return (
        <>
            <LoginContextProvider>
                {children}
            </LoginContextProvider>
        </>
    )
}

export default GlobalContext
