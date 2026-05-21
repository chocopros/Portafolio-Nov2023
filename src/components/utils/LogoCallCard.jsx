import React from 'react'
import styled from 'styled-components'

const LogoCallCard = ({ urlLogo, title }) => {
  return (
    <CardCall className={title.toLowerCase()}>
      <div className='container__img'>
        <img src={urlLogo} alt={`Logo-${title}`} />
      </div>
      <h3>{title}</h3>
    </CardCall>
  )
}

export default LogoCallCard

const CardCall = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  width: 120px;
  height: 120px;
  padding: 16px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    text-align: center;
    margin-top: 12px;
    font-size: 13px;
    font-weight: 600;
    color: #ffffff;
    transition: color 0.3s ease;
  }

  .container__img {
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;

    img {
      max-height: 100%;
      max-width: 100%;
      width: auto;
      height: auto;
      object-fit: contain;
    }
  }

  &:hover .container__img {
    transform: scale(1.12);
  }

  /* Specific Platform Glow Effects */
  &.whatsapp:hover {
    border-color: rgba(37, 211, 102, 0.45);
    background: rgba(37, 211, 102, 0.08);
    box-shadow: 0 10px 25px rgba(37, 211, 102, 0.15);
    
    h3 {
      color: rgb(37, 211, 102);
    }
  }

  &.telegram:hover {
    border-color: rgba(0, 136, 204, 0.45);
    background: rgba(0, 136, 204, 0.08);
    box-shadow: 0 10px 25px rgba(0, 136, 204, 0.15);
    
    h3 {
      color: rgb(0, 172, 255);
    }
  }

  &.discord:hover {
    border-color: rgba(114, 137, 218, 0.45);
    background: rgba(114, 137, 218, 0.08);
    box-shadow: 0 10px 25px rgba(114, 137, 218, 0.15);
    
    h3 {
      color: rgb(148, 168, 255);
    }
  }

  @media(min-width: 768px) {
    width: 140px;
    height: 140px;
    padding: 20px;

    .container__img {
      height: 56px;
      width: 56px;
    }

    h3 {
      font-size: 14px;
      margin-top: 14px;
    }
  }
`
