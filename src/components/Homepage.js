import React from 'react'
import Services from './Services';
import Products from './Products';
import Reviews from './Reviews';
import ContactUs from './ContactUs';

const Homepage = () => {
  return (
            <div className="container">
                   <Services/>
                        <hr />
                    <Products/>
                        <hr />
                    <Reviews/>
               <ContactUs/>
            </div>
      
  )
}


export default Homepage
