import React from 'react'

// lazy позволяет отложить загрузку кода компонента до его первого рендеринга
export const MainPageLazy = React.lazy(() => import('./Maaaaaain'))
