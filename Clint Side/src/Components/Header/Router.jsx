import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App.jsx'
import Home from '../Pages/Home/Home';
import Users from '../Pages/Users/Users.jsx';
const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/user",
                element: <Users />,
                loader: () => fetch("http://localhost:3000/users")
            }
        ]
    }
])
    

export default Router;