import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import App from "../pages/App";
import BulkChecker from "../pages/BulkChecker";
import Plan from "../pages/Plan";
import ApiDocs from "../pages/ApiDocs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AltLayout from "../layout/AltLayout";
import Account from "../pages/Account";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/bulk-checker",
        element: <BulkChecker />,
      },
      {
        path: "/plan",
        element: <Plan />,
      },
      {
        path: "/api-docs",
        element: <ApiDocs />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],

  },
  {
    path: '/',
    element: < AltLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  },

]);
