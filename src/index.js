import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = [
  {
      path: "/",
      element: <App/>,
  }
]

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router} />
);