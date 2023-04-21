import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop';
import Order from './component/Order/Order';
import Order_review from './component/OrderReviw/Order_review';
import Inventory from './component/Inventory/Inventory';
import LogIn from './component/LogIn/LogIn';
import LoadProducts from './LoadCartProducts/LoadCartProduct';
import SignUp from './SignUp/SignUp';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children:[
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/order',
        element: <Order></Order>
      },
      {
        path: '/order_review',
        element: <Order_review></Order_review>,
        loader: LoadProducts
      },
      {
        path: '/Inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
