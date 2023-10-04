import React from 'react'
import styled from 'styled-components';
import ContactUs from '../components/ContactUs';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
  return (
    <>
    <Helmet>
        <title>About ViridFood Catering Services</title>
        <meta name='description' content='We Are A Team That Consists Of Expert Chefs, Experienced Servers, And Dedicated 
                            Staffs Who Work Tirelessly To Ensure That Every Customer Has An Unforgettable Experience'/>
        <link rel="canonical" href="/aboutus" />
        </Helmet>
    <Wrapper>
            <div className="container">
                    <div className="title">
                        <h1>About Us</h1>
                            <div className='underline'></div>
                            <p>We Are Passionate About Food And Providing The Best Possible Service
                            To Our Customers. Our Team Consists Of Expert Chefs, Experienced Servers, And Dedicated 
                            Staffs Who Work Tirelessly To Ensure That Every Customer Has An Unforgettable Experience</p>
                         </div>

                  <h5>The Chefs</h5>
                  <p>Our Head Chef Has Over 20 Years Of Experience In Some Of The Top Restaurants In the World And 
                    Brings Her Unique Style And Flair To Every Dish We Serve. </p>
                  <h5>The Team</h5>
                  <p>Our Servers Are Knowledgable About Our Products And Services And Are Always Ready To Provide
                    Recommendations And Answer Any Questions You May Have.
                  </p>
                  <h5>The Vision</h5>
                  <p>We are Commited To Being At The ForeFront Of The Food Service Industry, And We Strive To
                    Improve Our Products And Services To Meet The Changing Needs Of Our Customers.
                  </p>
            </div>
            <ContactUs/>
    </Wrapper>  
    
  </>)
}
const Wrapper = styled('AboutUs')`
    .container{
        display: flex;
        flex-direction: column;
        height: 100vh;
        margin-top: 30px;
        margin-left: 50px;
    }

    h1{
        font-size: 2.2rem;
        font-family: Cormorant Garamond;
    }

    .title  p{
        margin-top: 14px;
    }

    .underline{
        margin-left: 50px;
    }

    h5{
        color: #000;
        font-family: Cormorant Garamond;
        font-weight: 700;
        font-size: 20px;
        margin-top: 50px;
    }

  @media (max-width: 992px) {

      .container{
        text-align: center;
      }
      .title .underline{
        margin-left: 190px;
        margin-top: 10px;
      }

   
    `
export default AboutUs
