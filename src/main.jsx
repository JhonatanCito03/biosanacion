import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TextDec from './Components/Login/textDec.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"

const router = createBrowserRouter([
  {path:'', element:<App/>},
  {path:'/textdec', element:<TextDec/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
