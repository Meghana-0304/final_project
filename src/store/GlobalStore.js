import React, { Children, createContext, useContext, useReducer } from "react";

const GlobalContext = createContext();

const initialState = {
    isHamClicked: false,
}

const reducer = (state, action) => {
    switch(action.type){
        case "SET_HAM_CLICKED":
            return { ...state, isHamClicked: action.payload }
        default:
            return state;
    }
}

export const GlobalProvider = ({ Children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {
                Children
            }
        </GlobalContext.Provider>
    )
}

export const useGlobalStore = () => useContext(GlobalContext);