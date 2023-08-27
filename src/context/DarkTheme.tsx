import React, { PropsWithChildren, createContext, useContext, useState } from "react"

type ColorModeContextType = {
  dark: boolean
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const darkTheme = createContext({} as ColorModeContextType)

export const DarkThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [dark, setDark] = useState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )

  return <darkTheme.Provider value={{ dark, setDark }}>{children}</darkTheme.Provider>
}

export const useDarkTheme = () => useContext(darkTheme)
