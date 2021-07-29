import React, { createContext, useState } from 'react'
import PropsContext from 'sdk/data/context/propsContext'

export type BlankType = {
  user: string
  name: string
}

export const BLANK_DEFAULT_VALUE: PropsContext<BlankType> = {
  state: {
    user: 'tiago.guizelini',
    name: 'Tiago Guizelini',
  },
  setState: () => { }
}

const BlankContext = createContext<PropsContext<BlankType>>(BLANK_DEFAULT_VALUE)

const BlankContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(BLANK_DEFAULT_VALUE.state)

  return (
    <BlankContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </BlankContext.Provider>
  )
}

export { BlankContextProvider }
export default BlankContext
