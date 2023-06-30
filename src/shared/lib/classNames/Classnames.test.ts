import { classNames } from './ClassName'

describe('classNames', () => {
  test('with cls', () => expect(classNames('some')).toBe('some'))

  test('with cls + additional', () =>
    expect(classNames('some', {}, ['class1', 'class2'])).toBe(
      'some class1 class2'
    ))

  test('with cls + mods + additional', () =>
    expect(
      classNames('some', { hovered: true, focus: false }, ['class1', 'class2'])
    ).toBe('some class1 class2 hovered'))

  test('with cls + mods=undefined + additional', () =>
    expect(
      classNames('some', { hovered: true, focus: undefined }, [
        'class1',
        'class2',
      ])
    ).toBe('some class1 class2 hovered'))
})
