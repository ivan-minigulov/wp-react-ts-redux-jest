import { Route, Routes } from 'react-router-dom'
import './style/index.scss'
import { Link } from 'react-router-dom'
import { AboutPageLazy } from './page/AboutPage/Aboooout.lazy'
import { MainPageLazy } from './page/MainPage/Maaaaaain.lazy'
import { FC, ReactNode, Suspense, useContext, useState } from 'react'
import { ThemeContext, Themes } from './theme/ThemeContext'
import { render } from 'react-dom'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/ClassName'

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <>
      <div className={classNames('app', {}, [theme])}>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/about'} element={<AboutPageLazy />} />
            <Route path={'/'} element={<MainPageLazy />} />
          </Routes>
        </Suspense>
        <button onClick={toggleTheme}>
          {theme === Themes.LIGHT ? 'Темная тема' : 'Светлая тема'}
        </button>
      </div>
    </>
  )
}

export default App
