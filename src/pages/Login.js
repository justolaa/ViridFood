// import React, { useState } from 'react';
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../firebase';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const Login = () => {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [user, setUser] = useState(null);
//  const [error, setError] = useState(null);

//  const handleSignUp = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         setUser(userCredential.user);
//         setEmail('');
//         setPassword('');
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//  };

//  const handleSignIn = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         setUser(userCredential.user);
//         setEmail('');
//         setPassword('');
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//  };

//  const handleLogout = () => {
//     auth.signOut().then(() => {
//       setUser(null);
//     });
//  };

//  const validateForm = () => {
//     return email.length > 0 && password.length > 0;
//  };

//  const isLoginForm = () => {
//     return password.length > 0;
//  };

//  return (
//     <Wrapper>
//       <div className="App">
//         {user ? (
//           <div>
//             <h1>Welcome, {user.displayName}</h1>
//             <button onClick={handleLogout}>Logout</button>
//           </div>
//         ) : (
//           <div>
//             <h1>Login or Signup</h1>
//             {error && <p>{error}</p>}
//             <form onSubmit={isLoginForm() ? handleSignIn : handleSignUp}>
//               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//               <button type="submit" disabled={!validateForm()}>
//                 {isLoginForm() ? 'Login' : 'Signup'}
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </Wrapper>
//  );
// };

// export default Login;



import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useProductsContext } from '../context/Context'
import styled from 'styled-components'


const Login = () => {
  const {signIn,userRole} = useProductsContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()


  const handleSubmit = async (e)=>{

     
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      if(userRole==='admin'){
      navigate('/admin')}
      if(userRole=== 'owner'){
      navigate('/owner')}
      else{navigate('/account')}
    }
    
     catch (error) {
      setEmail(error.message)
      console.log(error.message);
    }
  }
 
  return (
    <Wrapper>
     <div className='Form-Container'>
      <h1>Sign in to your account</h1>
      <p>Dont have an account yet? <Link to ='/signup'>Sign up</Link></p>
            <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email Address: </label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" />
                    </div>
                    
                    <div>
                        <label>Password: </label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password"/>
                    </div>
                    <button className='btn'> Sign in</button>
            
            </form>      
    </div>
  </Wrapper>
  )
}

const Wrapper = styled('Login')`
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

export default Login

