import React, { use, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const plantsPromise = fetch("/plants.json").then((res) => res.json());

const googleProvider = new GoogleAuthProvider();

const ProviderContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const plants = use(plantsPromise);

  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = async (displayName, photoURL) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, { displayName, photoURL });
      const updatedUser = { ...auth.currentUser };
      setUser(updatedUser);
      return updatedUser;
    } catch (error) {
      console.error("Profile update failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };



  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // console.log(Boolean(plants))

  const authInfo = {
    plants,
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    updateUserProfile,
    passwordReset,
    userSignOut,
  };
  return (
    <div>
      <AuthContext value={authInfo}> {children}</AuthContext>
    </div>
  );
};

export default ProviderContext;
