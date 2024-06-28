
import LayoutAccount from '../Layouts/LayoutAccounts/LayoutAccount';
import DashBoard from '../pages/MyAccount/DashBoard';
import AccountOrder from '../pages/MyAccount/AccountOrder';
import AccountDownload from '../pages/MyAccount/AccountDownload';
import AccountAddress from '../pages/MyAccount/AccountAddress';
import FormEditAddress from '../pages/MyAccount/FormEditAddress';
import Wishlist from '../pages/MyAccount/Wishlist';
import AccountOrderDetail from '../pages/MyAccount/AccountOrderDetail';
import FormAddAddress from '../pages/MyAccount/FormAddAddress';
import AccountDetail from '../pages/MyAccount/AccountDetail';

const routerAccounts =  {
    path: "/my-account/", 
    element: <LayoutAccount/>,
    children: [
        {
            path: "",
            element: <DashBoard/> 
        },
        {
            path: "orders",
            element: <AccountOrder/> 
        },
        {
            path: "orders/detail/:id",
            element: <AccountOrderDetail/> 
        },
        {
            path: "download",
            element: <AccountDownload/> 
        },
        {
            path: "address",
            element: <AccountAddress/> 
        },
        {
            path: "wishlist",
            element: <Wishlist/> 
        },
        {
            path: "account-detail",
            element: <AccountDetail title='Account Detail' /> 
        },
        {
            path: "add-address/billing",
            element: <FormAddAddress title='Add Billing address'/>  

        },
        {
            path: "edit-address/billing",
            element: <FormEditAddress title='Edit Billing address'/>  

        }
    ]
}

export default routerAccounts