import React from 'react'
import Services from './Services';
import Products from './Products';
import Reviews from './Reviews';
import ContactUs from './ContactUs';
import Notice from './Notice';

const Homepage = () => {
  return ( 
            <div className="container">
                   <Services/>
                    <Products/>
                    <Reviews/>
                    <Notice/>
               <ContactUs/>
            </div>
 
  )
}



export default Homepage
