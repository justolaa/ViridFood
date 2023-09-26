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
                           <p>Welcome To Our Food Service Sector! We Offer An Extensive Range Of Products
                        And Services And Provide Regular Promotions And Discounts. Explore Our Website
                        And Discover What We Have To Offer!
                    </p>
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
    width: 50%;
    top:20%;
    border-radius: 24px;
    background: rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(1.5px);
    text-align: center;
    font-family: Cormorant Garamond;

   h1{
      width: 700px;
      color: #F5F5DC;
      text-transform: uppercase;
      font-size: 28px;
      
   }
}
  .tagline > p {
    width: 400px;
    margin-left: 148px;
    flex: 1 0 0;
    color: var(--Neutral, #F5F5DC);
    text-align: center;
    font-size: 17px;
    font-style: normal;
    font-weight: 20;
    line-height: 34px;
   }

   @media screen and (max-width: 992px) {
      .text{
        width: 95%;
        right: 10px;
        text-align: center;
        
      h1{
        width: 400px;
        font-size: 16px;
        margin: auto;
      }
    }
    .tagline > p{
        font-size: 14px;
        margin: 0;
        margin: auto;
    }

`
export default Hero
