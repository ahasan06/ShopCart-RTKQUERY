
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { rootRouter } from './router/Router'
import { Provider } from "react-redux";
import { ourStore } from './store';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ourStore}>
  <RouterProvider router={rootRouter} />
</Provider>
)
