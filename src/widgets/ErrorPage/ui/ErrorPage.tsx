import { classNames } from 'shared/lib/classNames/ClassName'
import cls from './ErrorPage.module.scss'

interface ErrorPageProps {
  className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => (
  <div className={classNames(cls.ErrorPage, {}, [className])}>
    <p>Произошла непредвиденная ошибка</p>
    <button onClick={() => location.reload()}>Обновить страницу</button>
  </div>
)
