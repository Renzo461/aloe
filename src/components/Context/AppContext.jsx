import { createContext, useContext, useState } from "react"

const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
    const [idCtx, setidCtx] = useState(0)
    return (
        <AppContext.Provider value={{ idCtx, setidCtx }}>{children}</AppContext.Provider>
    )
}
export default AppContextProvider