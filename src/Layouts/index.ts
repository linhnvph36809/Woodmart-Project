import { createContext, useContext } from "react"

export const BackGroudContext = createContext<(pages?:string) => void>(() => {})
export const useGlobalContext = () => useContext(BackGroudContext)