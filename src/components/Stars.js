import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({stars, review}) => {

  const tempStars = Array.from({length: 5}, (_,index)=>{
    const number = index + 0.5
    return(
      <span key ={index}>
    {stars >= index + 1 ? <BsStarFill/> : stars >= number? <BsStarHalf/>:<BsStar/>}
  </span>
    )
  })
  return <Wrapper>
    <div className="stars">
       {tempStars}
    </div>
    <p className="reviews">({review})</p>
  </Wrapper>
}

const Wrapper = styled.div`
    .stars{
margin-left: 0px;
    } 
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-bottom: 0;
  }

  .reviews{
    margin-left: 0px;
  }
`
export default Stars
