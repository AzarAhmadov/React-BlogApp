import { createContext, useState } from "react";
export const globalContext = createContext();

const GlobalContextProvider = ({ children }) => {

    const [value, setValue] = useState('')

    const get = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
        }
    }

    const values = {
        value,
        setValue,
        get
    }

    return (
        <globalContext.Provider value={values}>
            {children}
        </globalContext.Provider>
    )
}


export default GlobalContextProvider