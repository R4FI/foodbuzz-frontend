import React, { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, 
    onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, 
    signOut, updateProfile} from 'firebase/auth';
import app from '../Component/Firebase/firebase.config';

export const AuthContext  = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const passwordReset=(email)=>{
            return sendPasswordResetEmail(email);
            
    }
//     sendPasswordResetEmail=(auth, email)
//   .then(() => {
//     // Password reset email sent!
//     // ..
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    const authInfo = {
        createUser,
        passwordReset,
        signIn,
        updateUser,
        logOut,
        user,
        loading
    }
    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};
export default AuthProvider;