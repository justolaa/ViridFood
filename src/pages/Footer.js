import React from 'react'
import { Link } from 'react-router-dom';
import { links,products } from '../data/constants';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
    <div className="container">
      <div className="quick-logo">
        <Link to='/' className='Logo'> <img src={require('../assets/Logo.png')} width='70px' height='70px' alt="Logo"/> </Link>
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
      
          </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled('Footer')`

.container{
  width: 100vw;
  margin-top: 0;
  background: #4B8673;
  overflow-x: hidden;
  
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
  justify-content: space-around;
  flex-shrink: 0;
}

.footer-links{
  display:flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 1;

  h1{
  font-family: 'Cormorant Garamond';
  color: var(--Neutral, #F5F5DC);
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0px;
  text-align: center;
  }
   p{
    text-align: center;
  }

  a{
    color: black;
  }
}

  .footer-links p{
    font-size: 1.3rem;
    line-height: 38px;
  }
  
@media (max-width: 992px) {
  .container{
    margin-top: 50px;
    padding: 14px;
  }

  .Links{
    margin: auto;
    gap: 0.5rem;
  }
 
    .footer-links h1{
      font-size: 15px;
    }
    .footer-links p{
      font-size: 15px;
      line-height: 30px;
    }
}
`

export default Footer
