import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Hero from "../layouts/Hero";
import Main from "../layouts/Main";
import ChefDetails from "../layouts/ChefDetails";
import DetailsLayout from "../layouts/DetailsLayout";
import Login from './../pages/Authentication/Login';
import Register from './../pages/Authentication/Register';
import PrivateRoutes from "./PrivateRoutes";
import Blogs from "../layouts/Blogs";
import ErrorPage from "../pages/ErrorPage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Main></Main>
            },
             {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blogs></Blogs>
            }
        ]
    },

    {
        path: 'chef',
        element: <DetailsLayout></DetailsLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ':id',
                element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`https://chefai-server.vercel.app/chef/${params.id}`)
            }
        ]
    }
])

export default router;