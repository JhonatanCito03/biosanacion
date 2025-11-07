import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TextDec from './Components/DescriptionText/textDec.jsx'
import NotFoundPage from './Components/NotFoundPage/NotFoundPage.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"

const router = createBrowserRouter([
  {path:'', element:<App/>},
  {path:'/textdec', element:<TextDec/>},
  {path:'*', element:<NotFoundPage/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
