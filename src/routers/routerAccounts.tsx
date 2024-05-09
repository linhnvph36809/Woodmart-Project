
import LayoutAccount from '../Layouts/LayoutAccount';
import DashBoard from '../pages/MyAccount/DashBoard';
import AccountOrder from '../pages/MyAccount/AccountOrder';
import AccountDownload from '../pages/MyAccount/AccountDownload';
import AccountAddress from '../pages/MyAccount/AccountAddress';
import FormEditAddress from '../pages/MyAccount/FormEditAddress';
const routerAccounts =  {
    path: "/my-account", 
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
            path: "download",
            element: <AccountDownload/> 
        },
        {
            path: "edit-address",
            element: <AccountAddress/> 
        },
        {
            path: "edit-address/billing",
            element: <FormEditAddress title='Billing address'/>  
        },
        {
            path: "edit-address/shipping",
            element: <FormEditAddress title='Shipping address'/>  
        }
    ]
}

export default routerAccounts