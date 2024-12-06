import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";

const provider = new GoogleAuthProvider();
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  // console.log(user)
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const signupWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const addProfile = (updateData) => {
    setLoading(true);
    return updateProfile(auth.currentUser,updateData);
  };

  const loginProfile = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogOut=()=>{
    return signOut(auth)
  }

 

  const info = {
    user,
    setUser,

    loginWithGoogle,
    signupWithEmail,
    addProfile,
    loginProfile,
    userLogOut
  };

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,(currentUser=>{
        setUser(currentUser)
        
    }))
    return ()=>{
        unSub()
    }

  },[])

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
