import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/provider/ThemeProvider/ui/ThemeProvider'
import App from './app/App'
import 'shared/config/i18n/i18n'

import { createRoot } from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
