import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import MainRoutes from './routes.jsx';
import {
  BrowserRouter,
  RouterProvider
} from "react-router";



createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <MainRoutes />
  </BrowserRouter>,
)
