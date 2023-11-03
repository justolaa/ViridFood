import React from 'react'
import { useProductsContext } from '../context/Context'
import { useNavigate } from 'react-router';
import styled from 'styled-components'

const Admin = () => {
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
    <>
    <Wrapper>
        <div className='Form-Container'>  
            <h1>Welcome, Bola Idowu {user.displayName}</h1>
            <h2>You have been assigned an Admin Role</h2>

            <div className="priviledges">
                <h3>Admin Priviledges</h3>
                 <div className="underline"></div>
            </div>
            
           
            <ol >
              <li>Create</li>
              <li>Update</li>
              <li>Delete data</li>
            </ol>
            <h3>Your Email is: {user.email}</h3>
            <button className='btn' onClick={handleLogout}>Logout</button>
        </div>
    </Wrapper>
    </>
  )
}
const Wrapper = styled('Account')`
.Form-Container{
    text-align: center;
    font-family:'Cormorant Garamond';
}
   button{
    margin-top: 35px;
}
.priviledges{
    position: relative;
    width: 100%;
    margin-top: 80px;
    
}
h3{
    margin-top: 18px;
}

.underline{
    position: absolute;
    left: 46%;
    bottom:0;
    text-align: center;
    margin-bottom: -8px;
}
ol{
    font-size: 20px;
}
 @media screen and (max-width: 992px) {
    .underline {
       position: absolute;
      left: 40%;
    }
  }
`
export default Admin
