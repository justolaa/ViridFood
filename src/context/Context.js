import React, { useContext, useEffect, useReducer, useState } from 'react'
import reducer from '../reducer/reducer'
import { useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, onAuthStateChanged } from "firebase/auth";
import {auth,db} from '../firebase'
import { setDoc, doc, getDoc} from 'firebase/firestore';


const initialState = {
  isSidebarOpen:false,
}

const ProductsContext = React.createContext()


export const ScrollToTop = ()=>{
  const {pathname} = useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true);
 const [userRole, setUserRole] = useState(null);

  const openSidebar = ()=>{
     dispatch({type: 'SIDEBAR_OPEN' })
  }
  const closeSidebar = ()=>{
     dispatch({type: 'SIDEBAR_CLOSE' })
  }

  const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn = (email, password)=>{
     return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = ()=>{
    return signOut(auth)
  }
 useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        GetUserRole(user);
      } else {
        setUserRole(null);
        setUser(null);
      }
    });
 }, []);
  
    const handleAdminRole = async () => {
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      role: 'admin'
    });
 };

 const handleOwnerRole = async () => {
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      role: 'owner'
    });
 };
const GetUserRole = async (user) => {
    try {
      const userRoleRef = doc(db, 'users', user.uid);
      const userRoleSnapshot = await getDoc(userRoleRef);
      const userRoleData = userRoleSnapshot.data();
      setUserRole(userRoleData.role);
    } catch (err) {
      console.error('Error getting user role: ', err);
    }
 };
  return (
    <ProductsContext.Provider value={{...state, openSidebar, closeSidebar, createUser, 
    user, logout, signIn,handleAdminRole, handleOwnerRole, loading, userRole, setUserRole}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}

//  if (loading) {
//     return <div>Loading...</div>;
//  }

//  if (!user) {
//     return <div>No user is signed in.</div>;
//  }