import React from 'react';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import {RouterProvider, createHashRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
import './styles/adminStyles.css';
import AuthProvider from './providers/AuthProvider';
import DashboardPage from './pages/DashboardPage';
import MateriaPage from './pages/MateriaPage.jsx';
import NotasPage from './pages/NotasPage.jsx';

const router= createHashRouter([
  {path: "/", element: <HomePage/>},
  {path: "/admin", element: <AdminPage/>},
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/materia/:nombre", element: <MateriaPage /> },
  {path: "/notas", element: <NotasPage />},
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
);
