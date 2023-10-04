import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="image">
                <img src={require('../assets/party-jollof.jpg')} width='100%' height='300px' alt="food"/>
                <div className="text">
                    <h1>Discover our pot of sweet surprises</h1>
                    <div className="tagline">
                           <h2>Welcome To Our Food Service Sector! We Offer An Extensive Range Of Products
                        And Services And Provide Regular Promotions And Discounts. Explore Our Website
                        And Discover What We Have To Offer!
                    </h2>
                    </div>

                </div>
            </div>
             
        </div>
    </Wrapper>
  )
}

const Wrapper = styled('Hero')`
width: 100vw;
   
.container{
    display: flex;
    justify-content: center;
}
    .image{
        display:flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        flex-shrink: 0;
        width: 100vw;
        height: 300px;
        text-align:center;
        align-items: center; 
        margin: auto;
       
        img{
        background-position: center;
        background-repeat: no-repeat;
        object-fit: cover;
        filter: brightness(45%);

    }

.text{
    position: absolute;
    width: 55%;
    top:20%;
    border-radius: 24px;
    background: rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(1.5px);
    text-align: center;
    font-family: Cormorant Garamond;
   
   h1{
      color: #F5F5DC;
      text-transform: uppercase;
      font-size: 28px;
   }
}
  .tagline > h2 {
    width: 450px;
    margin: auto;
    flex: 1 0 0;
    color: var(--Neutral, #F5F5DC);
    text-align: center;
    font-size: 19px;
    font-style: normal;
    font-weight: 20;
    line-height: 34px;
    font-family: Proza Libre;
   }

   @media screen and (max-width: 992px) {
      .text{
        width: 95%;
        right: 10px;
        text-align: center;
        backdrop-filter: none; 
        margin: auto;
        
      h1{
       font-size: 17px;
        margin: auto;
      }
    }
    .tagline > h2{
        width: fit-content;
        margin: auto;
        line-height: 28px;
        font-size: 16px;
        padding: 15px;
        font-weight:normal;

    }

`
export default Hero
