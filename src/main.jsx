import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NotFoundPage from './Components/NotFoundPage/NotFoundPage.jsx'
import About from './Components/about/about.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"

const router = createBrowserRouter([
  {path:'', element:<App/>},
  {path:'*', element:<NotFoundPage/>},
  {path:'About', element:<About/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
