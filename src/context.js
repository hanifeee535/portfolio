import React , {useState, useContext } from "react";
import {services } from "./data/Data"
import {skills} from "./data/skills"
const AppContext  = React.createContext() 
const AppProvier = ({children})=>{
   

   

    return (
        <AppContext.Provider value = {{services,skills}}>
        {children}
    </AppContext.Provider>
    )

}

export  const  useGlobalContext = ()=>{
    return useContext (AppContext);
}
export {AppContext , AppProvier}

