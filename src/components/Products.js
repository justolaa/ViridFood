import React from 'react'
import { products } from '../data/constants';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Products = () => {
  return (
    <Wrapper>
        <div className="container">
            
    <div className="title">
        
                        <h1>our products</h1>
                            <div className='underline'></div>
                                <div className="Images" >
                                    {products.map((products)=>{
                                        const {id, title, url, width, height} = products;
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
                    <div className="learn-more"><Link to='/services'><span>Learn More</span><span className="arrow"><img width="50" height="50" src="https://img.icons8.com/ios/50/right--v1.png" alt="right--v1"/></span> </Link></div> 
                     <hr />
                </div>
            </Wrapper>
  )
}

const Wrapper = styled('Products')`

 h1{
        font-size: 2.2rem;
        font-family: Cormorant Garamond;
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
     .title{
       margin-top: 50px;
    }

    .title > p{
        line-height: 36px;
        margin-top: 10px;
        font-size: 1.3rem;
        font-family: Proza Libre;
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
       font-family: Cormorant Garamond;
       font-size:23px;

    }

   .learn-more{
        width: fit-content;
        text-align: center;
        height: 44px;
        border-radius: 10px;
        padding: 10px;
        margin: auto;
        text-transform: uppercase;
        font-weight: 500;
        transition: var(--transition);
        box-shadow: 0 1px 3px rgba(161, 161, 161, 0.2);
        border-color: transparent;
    }

    .learn-more:hover{
        color: var(--clr-primary-1);
        background: #FFCC70;
    }
    
     .learn-more span{
        color: #000;
        font-size: 24px;
        font-weight: 400;
        text-transform: uppercase;
    }
     .arrow img{
        margin-right: -50px;
    }
  @media (max-width: 992px) {

      .container{
        text-align: center;
        margin-top: 35px;
      }

      .Images{ 
        display: flex;
        justify-content: space-evenly;
      }
      .underline{
         margin: auto;
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

export default Products
