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
import CheckOut from './component/CheckOut/CheckOut'
import PrivetRoute from './PriveteRoute/PriveteRoute'
import AuthProvider from './firebase/AuthProvider';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
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
        element: <PrivetRoute><Inventory></Inventory></PrivetRoute>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/checkOut',
        element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
