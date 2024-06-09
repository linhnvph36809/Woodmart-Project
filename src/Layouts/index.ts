import { createContext, useContext } from "react"

export {default as Header} from "../components/Header/Header"
export {default as Footer} from "../components/Footers/Footer.tsx"
export {default as ProductPopup} from "../components/Products/ProductPopup.tsx"
export {default as VideoGlobal} from "../components/Video/VideoGlobal.tsx";
export {default as ButtonScrollTop} from "../components/Buttons/ButtonScrollTop";
export {default as BackGroundTransparent} from "./components/BackGround/BackGroundTransparent.tsx";

export const BackGroudContext = createContext<(pages?:string) => any>(() => {})
export const useGlobalContext = () => useContext(BackGroudContext)