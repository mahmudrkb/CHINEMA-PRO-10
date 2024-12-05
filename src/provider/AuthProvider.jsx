import React, { createContext, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, updateCurrentUser, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';

const provider = new GoogleAuthProvider();
export const AuthContext = createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
      };

      const signupWithEmail=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
      };

    //   const addProfile=()=>{
    //     return updateProfile(auth.currentUser)
    //   }

      
     



    const info={
        user,
        setUser,
        loginWithGoogle,
        signupWithEmail

    }
       
    return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;