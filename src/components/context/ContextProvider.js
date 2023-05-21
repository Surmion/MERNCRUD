import React, { createContext, useState } from 'react'


export const adddata = createContext("");
export const updateddata = createContext("");
export const deldata = createContext("");

const ContextProvider = ({ children }) => {

    const [udata, setUdata] = useState("");
    const [updata, setUPdata] = useState("");
    const [dltdata, setDLTdata] = useState("");

    return (
        <adddata.Provider value={{ udata, setUdata }}>
            <updateddata.Provider value={{ updata, setUPdata }}>
                <deldata.Provider value={{ dltdata, setDLTdata }}>
                    {[children]}
                </deldata.Provider>
            </updateddata.Provider>


        </adddata.Provider>
    )
}

export default ContextProvider;