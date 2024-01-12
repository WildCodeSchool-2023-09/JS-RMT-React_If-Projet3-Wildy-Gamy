import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import AdminGame from "./pages/AdminGame";
import AdminUsersPage from "./pages/AdminUsersPage";
import TicTacToe from "./pages/TicTacToe";
import Signup from "./pages/auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "tictactoe",
        element: <TicTacToe />,
      },
      {
        path: "signup",
        element: <Signup />,
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
        path: "user",
        element: <AdminUsersPage />,
      },
    ],
  },
  {
    path: "/tictactoe",
    element: <TicTacToe />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
