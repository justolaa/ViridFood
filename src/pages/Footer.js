import React from 'react'
import { Link } from 'react-router-dom';
import { links,products } from '../data/constants';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
    <div className="container">
      <div className="quick-logo">
        <Link to='/' className='Logo'> <img src={require('../assets/Logo.png')} width='100px' height='100px' alt="Logo"/> </Link>
      </div>

      <div className="Links">    
                      <div className="footer-links">
                        <h1>Quick Links</h1>
                          {links.map((links)=>{
                                        const {id, title, url} = links;
                                        return(<>
                                          <div className="quick-links" key={id}>
                                            <Link to={url}><p>{title}</p></Link>
                                          </div>
                                          </>
                                        )
                                    })}
                          </div>

                  <div className="footer-links">
                    <h1>Products</h1>
                  {products.map((products)=>{
                                const {id, title} = products;
                                return(<>
                                  <div className="quick-links" key={id}>
                                    <Link to='/products'><p>{title}</p></Link>
                                  </div>
                                  </>
                                )
                            })}
                  </div>

                    <div className="footer-links">
                      <h1>Services</h1>
                      <p>Catering Service</p>
                                <p>Consultancy </p>
                              
                    </div>
         <div className="footer-links">
                      <h1>Contact us</h1>
                   <p>Chat With Us:<a href="https://wa.me/+2348137038442"><img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a></p>   
                      <p>Call: <a href="tel:+2348137038442">+2348137038442</a></p>
                              
                    </div>
          </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled('Footer')`

.container{
  width: 100vw;
  background: #4B8673;
     img{
        border-radius: 50%;
    }
}

.quick-logo{
  display: flex;
  justify-content: center;
  padding: 5px;
}

.Links{
    display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-shrink: 0;
}

.footer-links{
  display:flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 1;

  h1{
  font-family: Cormorant Garamond;
  color: var(--Neutral, #F5F5DC);
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0px;
  }

  a{
    color: black;
  }
}

  .footer-links p{
    font-size: 17px;
    line-height: 34px;
  }
  
@media (max-width: 992px) {
  .container{
    margin-top: 50px;
  }
    .footer-links h1{
      font-size: 15px;
    }
    .footer-links p{
      font-size: 15px;
    }
}
`

export default Footer
