import React from 'react';
import { GenerateQR, GeneratedQR, ScanQR, Datas, Login, AboutUs } from './pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout';
import Home from './pages/Home';
import FAQ from './pages/FAQ';

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element:<AboutUs />,
      },
      {
        path: '/qr_generate',
        element: <GenerateQR />
      },
      {
        path: '/qr_generated',
        element: <GeneratedQR />
      },
      {
        path: '/qr_scan',
        element: <ScanQR />,
      },
      {
        path: '/datas',
        element: <Datas />,
      },
      {
        path: '/datas/month',
        element: <Datas />
      },
      {
        path: '/datas/month/statis',
        element: <Datas />
      },
      {
        path: '/faqs',
        element: <FAQ />
      },
      {
        path: '/login',
        element: <Login />
      }
    ],
  },
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
