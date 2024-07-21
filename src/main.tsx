import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppContext from './context/AppContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContext>
    <App />
  </AppContext>
)
