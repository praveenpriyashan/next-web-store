'use client'
import {Context, createContext, ReactNode} from "react";

export const GlobalContext = createContext(null)

interface GlobalStateProps{
    children:ReactNode;
}

export const GlobalState = ({children}:GlobalStateProps) => {
   const value={}
    return (
        <GlobalContext.Provider value={value}>
           <main>{children}</main>
        </GlobalContext.Provider>
    )
}