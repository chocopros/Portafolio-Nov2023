import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButon'
import { Link } from 'react-router-dom'

function Navbar() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  const closeMenu = () => {
    setClicked(false)
  }

  return (
    <HeaderWrapper>
      <NavContainer>
        <Link to='/' onClick={closeMenu}>
          <Logo>
            <h1>JesusArechider.DEV</h1>
          </Logo>
        </Link>

        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link to='/' onClick={closeMenu}>About Me</Link>
          <Link to='/works' onClick={closeMenu}>Works</Link>
          <Link to='/posts' onClick={closeMenu}>Posts</Link>
          <Link to='/contact' onClick={closeMenu}>Contact</Link>
        </div>

        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </NavContainer>
    </HeaderWrapper>
  )
}

export default Navbar

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(32, 32, 35, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 1000;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
`

const NavContainer = styled.nav`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  .burguer {
    z-index: 1002;
    @media(min-width: 768px) {
      display: none;
    }
  }

  .links {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: rgba(32, 32, 35, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    z-index: 1001;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    transform: translateX(100%);
    opacity: 0;

    &.active {
      transform: translateX(0);
      opacity: 1;
    }

    a {
      color: #ffffff;
      font-size: 2rem;
      font-weight: 600;
      transition: color 0.3s ease;

      &:hover {
        color: rgb(255, 51, 187);
      }
    }

    @media(min-width: 768px) {
      position: static;
      height: auto;
      width: auto;
      background-color: transparent;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      flex-direction: row;
      gap: 2rem;
      transform: none;
      opacity: 1;
      z-index: auto;

      a {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.85);
        position: relative;
        padding: 5px 0;
        font-weight: 500;

        &::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: rgb(255, 51, 187);
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        &:hover {
          color: rgb(255, 51, 187);
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    background: linear-gradient(to right, #ffffff, rgb(255, 51, 187));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.85;
    }

    @media(min-width: 360px) {
      font-size: 1.5rem;
    }
  }
`