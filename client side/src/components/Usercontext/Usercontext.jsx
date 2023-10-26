import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword,signInWithPopup ,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword, signOut} from "firebase/auth";
import auth from '../Hooks/usefirebase';



export const Authconext=createContext(null)
const googleprovider = new GoogleAuthProvider();

const Usercontext = ({children}) => {
    const [user,setuser]=useState([])
    const [loading,setloading]=useState(true)
    // create user
   const createUser=(email,password)=>{
    setloading(true)
     return createUserWithEmailAndPassword(auth,email,password)
   }
  //  sign in user
   const signinUser=(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
// google user
const googlelogin=()=>{
    return signInWithPopup(auth,googleprovider)
}
// log out
const logOut=()=>{
    setloading(true)
    return signOut(auth)
}
    //  unsubscribe for  
    useEffect( () => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setuser(currentUser);
            setloading(false)
        })

        return () => {
            unsubscribe();
        }

    }, [])
    // auth information
    const authinfo={user,createUser,signinUser,logOut,loading,googlelogin}
    return (
        <Authconext.Provider value={authinfo}>
           {children}
        </Authconext.Provider>
    );
};


export default Usercontext;