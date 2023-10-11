import React from 'react'
import { Allservices } from '../data/constants';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return ( 
    <>
    <Helmet>
        <title>ViridFood Catering Services</title>
        <meta name='description' content='Book Our Exquisite Catering Services For Your Events. We serve mouthwatering African Dishes.'/>
        <link rel="canonical" href="/services" />
    </Helmet>
    <Wrapper>
            <div className="container">
                    <div className="title">
                        <h1>our services</h1>
                            <div className='underline'></div>
                            <p>Our Services Set Us Apart, With Every Customer Being Treated Like Royalty 
                            </p>
                                <div className="Images" >
                                    {Allservices.map((services)=>{
                                        const {id, title, url, width, height} = services;
                                        return(
                                            <div key={id}>
                                                <img src={url} width={width} height={height} alt={title} />
                                                 <div className="description">
                                                        <p>{title}</p>  
                                                 </div>
                                        </div>
                                        )
                                    })}
                                </div>
                </div>
                <div className="btn"><a href="https://wa.me/08183554935">Contact Us Now</a></div>
            </div>
            
             </Wrapper>
            </>
  )
}
const Wrapper = styled('Services')`

    h1{
        font-size: 2.2rem;
        font-family: 'Cormorant Garamond';
    }

   

    .title{
       margin-top: 50px;
    }

    .title > p{
        line-height: 36px;
        margin-top: 10px;
        font-size: 1.3rem;
        font-family: 'Proza Libre';
    }
     
    .Images{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        text-align: center;
        margin-top: 20px;
        flex-wrap: wrap;
          img{
            background-position: center;
            background-repeat: no-repeat;
            object-fit: cover;
            border-radius:10px;
            }
    }
    

    .description{
        transform: translateY(-64px);
         width: 300px;
         height: 61px;
         background: rgba(0, 0, 0, 0.20);
         backdrop-filter: blur(2px);
         border-radius:10px;
    }

    .description > p{
       line-height: 61px;
       text-align: center;
       color:var(--Neutral, #F5F5DC);
       font-family: 'Cormorant Garamond';
       font-size:23px;

    }

    .btn{
        width: fit-content;
    }
    .btn a{
        color:hsl(22, 28%, 21%);
    }

     @media (max-width: 992px) {

      .container{
        text-align: center;
      }
      .Images{ 
        display: flex;
        justify-content: space-evenly;
      }
  
    }
      @media (min-width: 992px) {

      .container{
        margin-top: 30px;
        margin-bottom: 50px;
        padding: 30px;
        
      }
      
      .underline{
        margin-left: 80px;
        margin-top: 10px;
      }
       .btn{
        width: fit-content;
        position: absolute;
        left: 45%;
    }
}
    `

export default Services
