import { createBrowserRouter,useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../pages/Homes/Home';
import PageCategory from '../pages/PageCategory/PageCategory';
import PageDetail from '../pages/PageDetails/PageDetail';
import PageShowroom from '../pages/PageInformations/PageShowroom';
import PageAbout from '../pages/PageInformations/PageAbout';
import PageGiftCards from '../pages/PageInformations/PageGiftCards';
import PageCart from '../pages/PageCart/PageCart';
import PageCheckOut from '../pages/PageCheckOut/PageCheckOut';
import PageOrderComplete from '../pages/PageOrderComplete/PageOrderComplete';

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
            },
            {
                path: "showrooms",
                element: <PageShowroom/>
            },
            {
                path: "about-us",
                element: <PageAbout/>
            },
            {
                path: "gift-cards",
                element: <PageGiftCards/>
            },
            {
                path: "cart",
                element: <PageCart/>
            }

        ]
    },
    {
        path: "/checkout",
        element: <PageCheckOut/>
    },
    {
        path: "/checkout/order-received", 
        element: <PageOrderComplete/>
    }

])

export default routers ; 