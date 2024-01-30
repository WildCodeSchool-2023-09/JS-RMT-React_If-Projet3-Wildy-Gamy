import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";

import App from "./App";
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import AdminGame from "./pages/AdminGame";
import AdminUsersPage from "./pages/AdminUsersPage";
import TicTacToe from "./pages/TicTacToe";
import InfoGame from "./pages/InfoGame";
import Signup from "./pages/auth/Signup";
import PageComment from "./pages/PageComment";
import Login from "./pages/auth/Login";
import AuthProvider from "../context/AuthContext";

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
  {
    path: "/commentaires",
    element: <PageComment />,
    loader: async () => {
      return connexion
        .get(`/comments`)
        .then((response) => response.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/games/:id",
    element: <InfoGame />,
    loader: async ({ params }) => {
      return connexion
        .get(`/games/${params.id}`)
        .then((response) => response.data)
        .catch((err) => console.error(err));
    },
  },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
