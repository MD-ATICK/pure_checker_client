import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router.jsx'
import UserContextProvider, { useUserContext } from './context/Context.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(

  <>
    <UserContextProvider  >
      <RouterProvider router={router} />
    </UserContextProvider>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={true}
    />
  </>
)
