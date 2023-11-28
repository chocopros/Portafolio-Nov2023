import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButon'
import { Link } from 'react-router-dom'


function Navbar() {



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
            <h1>JesusArechider.DEV</h1>
          </Logo>
        </Link>
        

        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link  to='/'>About Me </Link>
          <Link  to='/works'>Works</Link>
          <Link  to='/posts'>Posts</Link>
          <Link  to='/contact'>Contact</Link>
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
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;

`

const NavContainer = styled.nav`

  padding: .4rem;
  background-color: rgba(32, 32, 35, 0.692);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100px;
  position: fixed;
  z-index: 100;
  width: 100%;
  

  -webkit-box-shadow: 0px 22px 39px -31px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 22px 39px -31px rgba(0,0,0,0.75);
  box-shadow: 0px 22px 39px -31px rgba(0,0,0,0.75);

  h1 {
    color: white;
    
  }

  a{
    color: white;
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
    top: 150px;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 3;
    a{
      font-size: 3rem;
      margin-top: 1rem;
      color: #ffffff;
    }
  

  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #8d8d8d8e;
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
    height: 500px;
  }
`