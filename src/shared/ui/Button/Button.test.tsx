import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'
import React from 'react'

describe('Button', () => {
  test('test1', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('test2', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
    screen.debug()
  })
})
