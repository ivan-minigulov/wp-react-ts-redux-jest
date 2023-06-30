import React from 'react'

// lazy позволяет отложить загрузку кода компонента до его первого рендеринга
export const AboutPageLazy = React.lazy(() => import('./Aboooout'))
