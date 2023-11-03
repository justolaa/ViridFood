import React from 'react'
import { Navigate } from 'react-router-dom'
import { useProductsContext } from "../context/Context";

const ProtectedRoute = ({children}) => {
    const {user} = useProductsContext()
    if (!user) {
        return <Navigate to='/'></Navigate>
    }
  return children;
}

export default ProtectedRoute
