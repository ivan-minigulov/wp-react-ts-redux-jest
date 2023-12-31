import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/ClassName'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to={'/'}
          className={classNames(cls.mainLink)}
          theme={AppLinkTheme.SECONDARY}
        >
          Main
        </AppLink>
        <AppLink
          to={'/about'}
          className={classNames(cls.mainLink)}
          theme={AppLinkTheme.SECONDARY}
        >
          About
        </AppLink>
      </div>
    </div>
  )
}
