import { createBrowserRouter,useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../pages/Homes/Home';
import PageCategory from '../pages/PageCategory/PageCategory';
import PageDetail from '../pages/PageDetails/PageDetail';

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/> 
            },
            {
                path: "product-category",
                element: <PageCategory/>
            },
            {
                path: "product-detail",
                element: <PageDetail/>
            }
        ]
    },

])

export default routers ; 