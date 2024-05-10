import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ButtonScrollTop from "../components/Buttons/ButtonScrollTop";
// import SideLeftHidden from "../components/SideLeftHidden";
// import Login from "../pages/ContentSideRights/Login";
const LayOutMain = () => {
  return (
    <>
      <div className="relative">
        <Header />
        <div className="pt-[156px] bg-[url('https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-background.jpg')]">
          <Outlet></Outlet>
        </div>
        <Footer />
        {/* <SideLeftHidden>
          <Login/>
        </SideLeftHidden> */}
        <ButtonScrollTop/>
      </div>
    </>
  );
};

export default LayOutMain;
