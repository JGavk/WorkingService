import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './pages/user/Users.jsx';
import Worker from './pages/worker/Worker.jsx';
import WorkerStorage from './pages/worker/WorkerStorage.jsx'
import UserStorage from './pages/user/UserStorage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/users",
    element: <Users></Users>,
  },
  {
    path: "/workers",
    element: <Worker></Worker>,
  },
  {
    path: "/worker-storage",
    element: <WorkerStorage></WorkerStorage>,
  },
  {
    path: "/user-storage",
    element: <UserStorage></UserStorage>,
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);