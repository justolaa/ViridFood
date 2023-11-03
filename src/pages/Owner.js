import React from 'react'
import { useProductsContext } from '../context/Context'
import { useNavigate } from 'react-router';

const Owner = () => {
  const {user, logout, handleAdminRole, handleOwnerRole} = useProductsContext();
    const navigate = useNavigate();

    const handleLogout = async ()=> {
        try {
            await logout()
            navigate('/')
            console.log('You are logged out');
        } catch (e) {
            console.log(e.message);
        }
    }
    
  return (
    <div className='Form-Container'>
        <h1>Hi Olamide</h1>
        <h2>Your Email is: {user.email}</h2>
        <button className='btn' onClick={handleAdminRole}>Make Admin</button>
        <button className='btn' onClick={handleOwnerRole}>Make Owner</button>
        <button className='btn' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Owner
