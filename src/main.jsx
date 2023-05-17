import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Login from './Login/Login.jsx';
import Registration from './Registration/Registration.jsx';
import Home from './Home/Home.jsx';
import Booking from './Booking/Booking';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';
import CheackOut from './CheackOut/CheackOut';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/booking",
        element: <PrivateRoute><Booking></Booking></PrivateRoute>,
      },
      {
        path: "/checkout",
        element: <PrivateRoute><CheackOut></CheackOut></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
