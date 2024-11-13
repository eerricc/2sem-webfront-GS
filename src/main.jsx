import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//pages
import Home from './routes/Home/Home.jsx'
import About from './routes/About/About.jsx'
import Error from './routes/Error/Error.jsx'
import Login from './routes/Login/Login.jsx'
import Registration from './routes/Registration/Registration.jsx'
import Solution from './routes/Solution/Solution.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:'/', element:<App/>,
    errorElement:<Error/>,

    children:[
      {path:'/', element:<Home/>},
      {path:'/about', element:<About/>},
      {path:'/login', element:<Login/>},
      {path:'/registration', element:<Registration/>},
      {path:'/solution', element:<Solution/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
