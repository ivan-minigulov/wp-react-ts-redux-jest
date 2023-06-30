//Для чтения module из css/scss, Для генерации уникальных наименований classname, id - если они повторяются для разных элементов
declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

//Чтобы ts мог импортировать файлы svg
declare module '*.svg' {
  import React from 'react'
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.gif'
// Декларируем глобальную переменную __IS_DEV__, которую объявили с помощью webpack в plugins
declare const __IS_DEV__: boolean
