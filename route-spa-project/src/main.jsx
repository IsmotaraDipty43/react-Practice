import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Component/About/About';
import Users from './Component/Users/Users';
import Userdetails from './Component/Userdetaisl/Userdetails';
import Post from './Component/Post/Post';

import Postdetails from './Component/PostDetails/Postdetails';
import ErrorPage from './Component/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children : [
      {
        path: '/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact>

        </Contact>
      },
      {
        path:'/users',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
            loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<Userdetails></Userdetails>
      },
      {
        path:'/post',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Post></Post>
      },
      {
        path:'/post/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <Postdetails></Postdetails>
      }
    ]
}



])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)
