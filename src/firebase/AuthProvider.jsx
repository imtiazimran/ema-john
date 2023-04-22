import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
      return signOut(auth)
    }
    useEffect(() =>{
      const unMount = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
        setLoading(false)
      })
      return () =>{
        return unMount()
      }
    },[])

  const AuthInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading
  };

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
