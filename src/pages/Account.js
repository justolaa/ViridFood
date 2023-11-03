import React from 'react'
import { useProductsContext } from '../context/Context'
import { useNavigate } from 'react-router';
import styled from 'styled-components'


const Account = () => {
    const {user, logout} = useProductsContext();
  
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
    <Wrapper>
    <div className='Form-Container'>  
        <h1>Welcome, {user.displayName}</h1>
        <h2>We Are Excited to Have You Here !</h2>
        <h3>Your Email Address Is: {user.email}</h3>
        <button className='btn' onClick={handleLogout}>Logout</button>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled('Account')`
.Form-Container{
    font-family:'Cormorant Garamond';
    text-align: center;
}
h3{
    margin-top: 18px;
}
   button{
    margin-top: 35px;
}
`
export default Account
