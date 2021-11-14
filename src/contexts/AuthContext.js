import React, { createContext, useContext, useEffect, useReducer } from 'react';
import {auth} from "../firebase/FireBase"
import {
    createUserWithEmailAndPassword, onAuthStateChanged,
    signInWithEmailAndPassword, signOut } from 'firebase/auth'


    
export const authContext = createContext()
const INIT_STATE = {
    user: null,
}


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {...state, user: action.payload};
            case "LOGOUT_USER":
                return {...state, user: action.payload};
        default:
            return state;
    }
}


const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                dispatch({
                    type: "LOGIN_USER",
                    payload: user,
                });
            }else {
                dispatch({
                    type: "LOGOUT_USER",
                    payload: null,
                })
            }
        })
    },[])

    const createUserWithEmailAndPasswordHandler = async (
        email,
        password
    ) => {
        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
        }catch(e) {
            console.log(e);
        }
    }

    const logOut = async () => {
        signOut(auth)
        .then(() => {
            dispatch({
                type: "LOGOUT_USER",
                payload: null
            })
        })
        .catch((e) => {
            console.log(e);
        })
    }

    const loginUserWithEmail = async (email, password) => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
        }catch (e) {
            console.log(e);
        }
    }

    return (
        <authContext.Provider
        value={{
            createUserWithEmailAndPasswordHandler,
            loginUserWithEmail,
            logOut,
            user: state.user,
        }}
        >
            {props.children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;