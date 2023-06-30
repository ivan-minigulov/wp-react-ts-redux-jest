import { classNames } from 'shared/lib/classNames/ClassName'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    theme = ButtonTheme.PRIMARY,
    className,
    children,
    ...otherProps
  } = props
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
