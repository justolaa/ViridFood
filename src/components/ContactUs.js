import React from 'react'
import styled from 'styled-components'

const ContactUs = () => {
  return (
    <Wrapper>
     <div className="call-to-action">
                    <h1>Get Started with Us !</h1>
                    <div className='underline'></div>
                    <p>Call ViridFood at <a href="tel:+2348137038442">+2348137038442</a> To Learn More !</p>
                    <p>To Request A Quote: <a href="https://wa.me/+2348137038442">Click Here ! </a></p>
                    <p>Chat With Us:<a href="https://wa.me/+2348137038442"> Click Here !</a><img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></p>
                </div>
     </Wrapper>
  )
}

const Wrapper = styled('ContactUs') `

h1{
    font-size: 2.2rem;
        font-family: Cormorant Garamond;
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
    margin-top: 40px;
    line-height: 8px;
    font-size: 18px;

}
     
}
 

`
export default ContactUs
