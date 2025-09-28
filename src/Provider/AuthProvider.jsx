import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Component/Firebase/firebase';


export const AuthContext = createContext()


const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password);
    };

    const LogOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (createUser) => {
            setUser(createUser)
            setLoading(false);
        });
        return () => {
            unSubscribe()
        }

    }, [])



    const authData = {
        createUser,
        user,
        setUser,
        LogOut,
        signIn,
        loading

    }




    return <AuthContext value={authData}> {children} </AuthContext>
};

export default AuthProvider;