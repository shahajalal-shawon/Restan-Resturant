import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile';
import UserProfile from './Pages/UserProfile/UserProfile';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/updateprofile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/userprofile',
        element: <UserProfile></UserProfile>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
