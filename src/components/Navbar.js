import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { links } from '../data/constants';
import styled from 'styled-components';
import { useProductsContext } from '../context/Context';


const Navbar = () => {
    const {openSidebar, userRole} = useProductsContext();

  return (
    <Wrapper>
    <div className="nav-container">
        <div className="nav-header">
            <Link to='/' className='Logo'> <img src={require('../assets/Logo.png')} width='100px' height='100px' alt="Logo"/><div className="text">Virid<span>Food</span></div> </Link>
            <button type='button' className="nav-toggle" onClick={openSidebar}>
                <FaBars/>
            </button>
            <div className="Links">
                    {links.map((links)=>{
                        const {id, title, url} = links;
                        return(
                            <div id="home">
                            <NavLink key={id} to={url}><p>{title}</p></NavLink>
                            </div>
                        )
                    })}
        </div>
      </div>
        {userRole ? <div className='btn'><Link to='/admin'>Account</Link></div> : <div className='btn'><Link to='/account'>Account</Link></div>}
    </div>
    </Wrapper>
  )
}

const Wrapper = styled('Navbar') `
  width: 100vw;
  margin-bottom: 30px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:#F6FBF4;

.nav-container{
     width: 90vw;
     margin: 0 auto;
     max-width: var(--max-width);     
}
 .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-header img{
      border-radius: 50%;
      margin-left: 6px;
      flex-shrink: 0;
  }
 .nav-toggle {
    background: transparent;
    border: transparent;
    color: #5FD068;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  
.text{
    flex-shrink:0;
     color: black;
     font-family: 'Cormorant Garamond';
     font-size: 24px;
     margin-left: 6px;
     margin-top: -69px;
     color: black;
     font-weight: 400;
     transform: translateX(106px);
    }


.Links{
    display: none;
}
@media (max-width: 992px) {
    .btn {
      display: none;
    }
  }

@media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .Links{
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    margin-right: 380px;
}

.Links > div{
    margin-left: 30px;
    font-size: 17px;
}

.btn{
  position: absolute;
  right: 0;
  top: 50px;
  margin-right: 50px;
  text-align: end;
  color: black;
}
    }


`

export default Navbar
