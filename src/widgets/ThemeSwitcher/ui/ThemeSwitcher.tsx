import { Themes, useTheme } from 'app/provider/ThemeProvider'
import React from 'react'
import { classNames } from 'shared/lib/classNames/ClassName'
import cls from './ThemeSwitcher.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      theme={ButtonTheme.PRIMARY}
      onClick={toggleTheme}
    >
      {theme === Themes.LIGHT ? 'Темная тема' : 'Светлая тема'}
    </Button>
  )
}
