import { BsFileEarmarkText } from "react-icons/bs";
import { IoDownloadOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoDuplicate } from "react-icons/io5";
const classes = "text-[50px] text-[#bbb] flex mx-auto dashboard-icon" ; 

const navLinksAccount = [
    {
        path: "",
        name: "Dashboard",
        icon: <></>
    },
    {
        path: "orders",
        name: "Orders",
        icon: <BsFileEarmarkText className={classes}/>
    },
    {
        path: "review-product",
        name: "Review Products",
        icon: <IoDuplicate className={classes}/>

    },
    {
        path: "download",
        name: "Downloads",
        icon: <IoDownloadOutline className={classes}/>

    },
    {
        path: "address",
        name: "Addresses",
        icon: <IoLocationOutline className={classes}/>
        
    },
    {
        path: "account-detail",
        name: "Account details",
        icon: <IoPersonCircleOutline className={classes}/>

    },
    {
        path: "wishlist",
        name: "Wishlist",
        icon: <IoHeartOutline className={classes}/>
    }

]

export default navLinksAccount