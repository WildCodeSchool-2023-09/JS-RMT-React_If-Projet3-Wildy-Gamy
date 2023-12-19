import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import AdminGame from "./pages/AdminGame";
import AdminUsersPage from "./pages/AdminUsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "admin/",
    element: <AdminPage />,
    children: [
      {
        path: "game",
        element: <AdminGame />,
      },
      {
        path: "users",
        element: <AdminUsersPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
