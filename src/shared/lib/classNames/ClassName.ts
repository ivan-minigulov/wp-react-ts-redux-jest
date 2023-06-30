type Mods = Record<string, boolean | string>

export function classNames(
  cls: string, // главный класс css
  mods: Mods = {}, // объекты, например: {hovered: true}
  additional: string[] = [] // второстепенные классы
): string {
  return [
    cls,
    ...additional.filter((className) => Boolean(className)),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ')
  // Получаем строку по типу: 'app hovered back-user-red'
}
