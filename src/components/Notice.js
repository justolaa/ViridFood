import React from 'react'
import styled from 'styled-components'

const Notice = () => {
  return (
    <Wrapper>
            <div className='Notice-Container'>
            <h1>Coming Soon...</h1>
            <img src={require('../assets/Logo.png')} width='100px' height='100px' alt="Logo"/>
            <h2>Sunday Sunday!!!</h2>
            <p>Sunday! A Day We Have Designated For Serving All Varieties Of Rice !</p>
            <ul>
                <li>Jollof-Rice</li>
                <li>Fried-Rice</li>
                <li>Coconut-Rice</li>
                <li>Chinese-Rice e.t.c</li>
            </ul>
            <p>More Information Coming Soon!!</p>
            </div>
    </Wrapper>
  )
}

const Wrapper = styled('Notice')`
   .Notice-Container{
    margin: auto;
    width: fit-content;
    background: #F5DF99;
    border-radius: 35px;
    padding: 25px;
    font-size: 17px;
    font-family: 'Cormorant Garamond';
    animation: wiggle 3s linear infinite;

     img{
        border-radius: 50%;
    }

    ul{
        line-height: 40px;
        list-style-type: circle;
        font-family: 'Proza Libre';
    }
   }

   ul li{
    background: #F6FBF4;
    margin: 10px;
    color: black;
   }
   p{
    font-family: 'Proza Libre';
   }

   @keyframes wiggle{
    0%, 7% {
        transform: rotateZ(0);
    }
    15%{
        transform: rotateZ(-15deg);
    }
    20%{
        transform: rotateZ(10deg);
    }
     25%{
        transform: rotateZ(-10deg);
    }
     30%{
        transform: rotateZ(6deg);
    }

    35%{
        transform: rotateZ(-4deg);
    }
     40%, 100%{
        transform: rotateZ(0);
    }

   }
    @media (max-width: 992px) {
.Notice-Container{
    width: 340px;
    margin: auto; 
}

`

export default Notice
