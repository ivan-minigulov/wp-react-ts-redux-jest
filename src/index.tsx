import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/provider/ThemeProvider/ui/ThemeProvider'
import App from './app/App'
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/provider/ErrorBoundary'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
