import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Statistics from './components/Statistics'
import AppliedJobs from './components/AppliedJobs'
import Blog from './components/Blog'
import JobDetails from './components/JobDetails'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      { path: '/statistics', element: <Statistics /> },
      {
        path: 'features/:id',
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch('/features.json')
      },
      { path: '/appliedjobs', element: <AppliedJobs /> },
      {
        path: 'applieddata/:id',
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch('/features.json')
      },
      { path: '/blog', element: <Blog /> },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
)