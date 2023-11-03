import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useProductsContext } from '../context/Context';
import styled from 'styled-components'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {createUser} = useProductsContext();
    const navigate = useNavigate();

    const handleSubmit =  async (e)=>{
        e.preventDefault()
        setError('')
        try {
            await createUser(email,password)
            navigate('/account')
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <Wrapper>
    <div className='Form-Container' >
      <h1>Sign up for your free account</h1>
      <p>Already have an account? <Link to ='/login'>Sign in</Link></p>
            <form onSubmit={handleSubmit}>
                    <div>
                        <label >Email Address: </label>
                        <input onChange={(e)=> setEmail(e.target.value)} type="email" />
                    </div>
                    
                    <div>
                        <label>Password </label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password"/> 
                    </div>
                    <button className='btn'>Sign Up</button>
            </form>           
    </div>
    </Wrapper>
  )
}

const Wrapper = styled('Signup')`
.Form-Container{
font-family:'Cormorant Garamond';
display: flex;
flex-direction: column;
 background-color: #f8f9fa;
 text-align: center;
 margin-top: 100px;
 padding: 30px;
}
 
form {
 margin-top: 20px;
}

input {
 margin-bottom: 25px;
 padding: 8px;
 width: 300px;
 display: inline-block;
 border: 1px solid #ccc;
 box-sizing: border-box;
}

button{
 padding: 8px 20px;
 cursor: pointer;
 width: 300px;
}
`
export default Signup
