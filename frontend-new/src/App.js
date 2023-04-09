import Navbar from './pages/Navbar';
import Home from './pages/Home';
import { createBrowserRouter,  RouterProvider, Outlet } from 'react-router-dom';
import User from './pages/user/User';
import AddUser from './pages/user/AddUser';
import Edit from './pages/user/Edit';
import React from 'react';

const Layout = () => {

  return (
    <div className="app">
        <Navbar />
        <Outlet />
      {/* <Footer /> */}  
    </div>
  );
};
const router = createBrowserRouter([
  
 
      {
        path: '/',
        element:<Layout/>,
        children: [
          {
            path: '/',
            element: <Home/>,
          },
          // {
          //   path: '/users/:id',
          //   element: <User/>,
          // },
          {
            path: '/add-user',
            element: <AddUser/>,
          },
          {
            path: '/edit-user/:id',
            element: <Edit/>,
          },
        ]
      },
    
 
]);
const App = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;