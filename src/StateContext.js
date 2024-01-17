import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

const StateContext = ({ children }) => {
  const [showMonthly, setShowMonthly] = useState(true)

  return (
    <Context.Provider
      value={{
        showMonthly,
        setShowMonthly,
      }}
    >
      {children}
    </Context.Provider>
  )
}
export const useStateContext = () => useContext(Context)

export default StateContext
