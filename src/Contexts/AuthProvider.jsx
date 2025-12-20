import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const deleteOneUser = () => {
  return deleteUser(auth.currentUser);
};

const signInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const userInfo = { createUser, deleteOneUser, signInUser };

const AuthProvider = ({ children }) => {
  return <AuthContext value={userInfo}> {children} </AuthContext>;
};

export default AuthProvider;
