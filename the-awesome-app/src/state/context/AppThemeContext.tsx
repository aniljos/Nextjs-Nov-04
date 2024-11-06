'use client'
import React, { useState } from "react";

export type AppThemeState = {
    mode: string,
    changeMode: (mode: string) => void
}

export const initialState: AppThemeState = {
    mode: 'light',
    changeMode: () => {}
}


//create context/store
export const AppThemeContext = React.createContext(initialState);

export function AppThemeContextProvider({children}: 
                                Readonly<{children: React.ReactNode}>){

    const [mode, setMode] = useState(initialState.mode);

    return (
        <AppThemeContext.Provider value={{mode:mode, changeMode:setMode}}>
            {children}
        </AppThemeContext.Provider>
    )

}