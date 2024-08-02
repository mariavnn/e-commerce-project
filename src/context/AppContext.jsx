/* eslint-disable react/prop-types */
import React from "react";

const AppContext = React.createContext();

function ContextProvider({ children }){
    const [items, setItems] = React.useState(null);
    const [previews, setPreview] = React.useState(null);


    return(
        <AppContext.Provider value={{
            items,
            setItems,
            previews, 
            setPreview
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, ContextProvider}