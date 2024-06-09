import { createBrowserRouter } from 'react-router-dom';
import LayOutMain from '../Layouts/LayoutMain';
import Home from '../pages/Homes/Home';
import PageCategory from '../pages/Category/PageCategory';
import PageDetail from '../pages/Details/PageDetail';
import PageShowroom from '../pages/Informations/PageShowroom';
import PageAbout from '../pages/Informations/PageAbout';
import PageGiftCards from '../pages/Informations/PageGiftCards';
import PageCart from '../pages/Cart/PageCart';
import PageCheckOut from '../pages/CheckOut/PageCheckOut';
import PageOrderComplete from '../pages/OrderComplete/PageOrderComplete';
import routerAccounts from './routerAccounts';
import Login from '../pages/Authentication/Login';
import ForgetPassword from '../pages/Authentication/ForgetPassword';
import Blog from '../pages/Blog/Blog';
const routers = createBrowserRouter([
    {
        path: "/",
        element: <LayOutMain/>,
        children: [
            {
                path: "",
                element: <Home/> 
            },
            {
                path: "product-category/:id",
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
                path: "blog",
                element: <Blog/>
            },
            {
                path: "gift-cards",
                element: <PageGiftCards/>
            },
            {
                path: "cart",
                element: <PageCart/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "lost-password",
                element: <ForgetPassword/>
            },
            routerAccounts


        ]
    },
    {
        path: "/checkout",
        element: <PageCheckOut/>
    },
    {
        path: "/checkout/order-received", 
        element: <PageOrderComplete/>
    },

])

export default routers ; 