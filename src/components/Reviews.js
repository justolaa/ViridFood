import React from 'react'
import { reviews } from '../data/constants';
import Stars from './Stars';
import styled from 'styled-components';

const Reviews = () => {
  return (
    <Wrapper>
        <div className="container">

        
    <div className="title">
                        <h1>Customer Reviews</h1>
                        <div className='underline'></div>
                        <p>Here is What Our Satisfied Customers Have to Say About Our Food And Services</p>
                    <div className="reviews"> 
                       {reviews.map((reviews)=>{
                            const {id, review, name, stars } = reviews;
                            return(
                                <div className="customer-reviews" key={id}>
                                    <h4>{name}</h4>
                                    <Stars stars={stars} review={review}/>
                                </div>
                            )
                       })}
                    </div>
                </div>
            </div>
        </Wrapper>
  )
}

const Wrapper = styled('Reviews')`
.container{
    margin: 50px;
        }
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
.reviews{
        display: grid;
        grid-template-rows: repeat(2,auto) ;
        grid-template-columns: repeat(2, auto);
        gap: 10px;
    }

.customer-reviews{
    margin-top: 15px;
    border-style: ridge;
    border-radius: 15px;
    background:#F6FBF4;
    padding: 12px;
   

    h4{
        font-family: 'Cormorant Garamond';
        border-radius: 10px;
    }
}


 @media (max-width: 992px) {
    

      .container{
        text-align: center;
        margin-top: 35px;
      }

      .reviews{
        margin-left: 0px;
        display: grid;
        grid-template-rows: repeat(4, 228px) ;
        grid-template-columns: repeat(1, auto);
        gap: 10px;
      }
     
       
}
  @media (min-width: 992px) {

      .container{
       margin-left: 50px;
      }
      .underline{
        margin-left: 60px;
        margin-top: 10px;
      }
}

`
export default Reviews
