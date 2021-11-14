import React, { createContext } from 'react';


export const clientContext = createContext()

const INIT_STATE = {

}

const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        default: 
            return state;
    }
} 

const ClientContextProvider = (props) => {
    return (
        <clientContext.Provider>
            {props.children}
        </clientContext.Provider>
    );
};

export default ClientContextProvider;