
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { rootRouter } from './router/Router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={rootRouter}/>
)
