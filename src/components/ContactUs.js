import React from 'react'
import styled from 'styled-components'

const ContactUs = () => {
  return (
    <Wrapper>
     <div className="call-to-action">
                    <h1>Get Started with Us !</h1>
                    <div className='underline'></div>
                    <p> <span>Call ViridFood At </span><a href="tel:2348137038442"><span>+2348137038442</span></a><span> To Learn More!</span></p>
                    <p> <span>To Request A Quote: </span><a href="https://wa.me/+2348137038442"> <span>Click Here!</span></a></p>
                    <p><span>Chat With Us:</span><a href="https://wa.me/+2348137038442"> Click Here !</a><img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></p>
                </div>
     </Wrapper>
  )
}

const Wrapper = styled('ContactUs') `

h1{
    font-size: 2.2rem;;
        font-family: 'Cormorant Garamond';
}

.call-to-action{
    margin: 50px;
    margin-top: 90px;

    a{
        color: black;
        font-weight: 700;
        text-decoration: underline;
    }
}

.call-to-action .underline{
    width: 128px;
}

.call-to-action p{
    margin-top: 29px;
    font-size: 20px;
    font-family: Proza Libre;
    margin-left: 5px;
    font-weight: 500;
    line-height: 40px; 
}


 @media (max-width: 992px) {
.call-to-action p{
    margin-top: 35px;
    line-height: 8px;
    font-size: 18px;
}
.underline{
    margin-left: 0;
}
     
}
 

`
export default ContactUs
