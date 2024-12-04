import React, { createContext, useState } from 'react';

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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



    const info={
        user,
        setUser,
        loginWithGoogle,

    }
       
    return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;