import React from "react";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import DocentePage from "./pages/DocentePage";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./styles/adminStyles.css";
import "./styles/main.css";
import AuthProvider from "./providers/AuthProvider";

const router = createHashRouter([
  { path: "/", element: <HomePage /> },
  { path: "/admin", element: <AdminPage /> },
  { path: "/docente", element: <DocentePage /> },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
