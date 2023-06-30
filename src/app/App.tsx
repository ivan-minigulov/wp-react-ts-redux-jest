import './style/index.scss'
import { useTheme } from './provider/ThemeProvider/index'
import { classNames } from '../shared/lib/classNames/ClassName'
import { AppRouter } from './provider/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

const Component = () => {
  const { t, i18n } = useTranslation()

  const toogleTranslate = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <div>
      <button onClick={toogleTranslate}>{t('Перевод')}</button>
      {t('Текстовый перевод')}
      {t('Текст')}
    </div>
  )
}

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <Component />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
