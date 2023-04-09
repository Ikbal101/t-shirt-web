import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Review from './component/Review/Review';
import Main from './component/Layout/Main';
import Grandpa from './component/Grandpa/Grandpa';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=> fetch("tshirts.json"),
      },
      {
        path:"/review",
        element:<Review></Review>,
      },
      {
        path:"/grandpa",
        element:<Grandpa/>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
