import { classNames } from 'shared/lib/classNames/ClassName'
import cls from './AppLink.module.scss'
import { FC, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const {
    theme = AppLinkTheme.PRIMARY,
    to,
    className,
    children,
    ...otherProps
  } = props
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
