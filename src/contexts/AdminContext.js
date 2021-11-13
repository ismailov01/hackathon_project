import React, { createContext } from 'react';

export const adminContext =  createContext()

const INIT_STATE = {

}

const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        default: 
            return state;
    }
}


const AdminContextProvider = () => {
    return (
        <div>
            
        </div>
    );
};
//qwe
export default AdminContextProvider;