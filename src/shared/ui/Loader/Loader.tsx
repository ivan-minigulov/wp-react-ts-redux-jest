import { classNames } from 'shared/lib/classNames/ClassName'
import './Loader.scss'

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames('lds-facebook', {}, [className])}>
    <div></div>
    <div></div>
    <div></div>
  </div>
)
