import React, { ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from './ThemeContext'

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || Themes.LIGHT

type PropsWithChildren = { children?: ReactNode }

export const ThemeProvider = (props: PropsWithChildren) => {
  const [theme, setTheme] = useState<Themes>(defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {props.children}
    </ThemeContext.Provider>
  )
}
