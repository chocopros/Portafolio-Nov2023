import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import BurguerButton from './BurguerButon'



const Navbar = () => {


  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }



  return (
    <>
      <NavContainer>
        
        <Link to='/'>
          <Logo>
            <h1>JesusArechider.Dev</h1>
          </Logo>
        </Link>
        

        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link to='/'>// About me </Link>
          <Link to='/works'>// Works</Link>
          <Link to='/post'>// Post</Link>
          <Link to='/contact'>// Contact</Link>
        </div>

        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
          <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
        </div>
        
        
      </NavContainer>
    </>
  )
}

export default Navbar

const Logo = styled.div`
  color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
 

  h1 {
    color: #ffffff;
    background-color: #1d1d1d;
  }

`

const NavContainer = styled.nav`

  padding: .4rem;
  background-color: #1d1d1d;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  

  -webkit-box-shadow: 0px 22px 39px -31px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 22px 39px -31px rgba(0,0,0,0.75);
  box-shadow: 0px 22px 39px -31px rgba(0,0,0,0.75);

  a{
    color: #131313;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: 1000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    background-color:  #1d1d1d;
    a{
      color: #ffffff;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: #ffffff;
        display: inline;
        
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 3;
    a{
      font-size: 3rem;
      margin-top: 1rem;
      color:  #131313;
    }
  

  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #1d1d1d;
  position: absolute;
  top: 1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: all 0.2s ease ;
  
  &.active{
    border-radius: 0 0 50% 0;
    top: 100px;
    left: 0;
    width: 100%;
    height: 100%;
  }
`