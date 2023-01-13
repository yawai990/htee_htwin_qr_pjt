import React,{ createContext, useContext, useState } from "react";

const AppContext = createContext();

export const ContextProvider = ( { children }) =>{
    const [ qrData, setQRdata ] = useState();

    const handleSetQR = ( data ) => setQRdata(data);
    
    return <AppContext.Provider value={{
        qrData,handleSetQR
    }}>
        {children}
    </AppContext.Provider>
};

export const useGlobalContext  = () => useContext(AppContext);