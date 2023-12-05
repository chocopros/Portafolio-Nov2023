import React from 'react'
import styled from 'styled-components'

const LogoCallCard = ({ urlLogo, title }) => {
  return (
    <CardCall>
      <div className='container__img'>
        <img src={urlLogo} alt={`Logo-${title}`} />
      </div>
      <h2>{title}</h2>
    </CardCall>
  )
}

export default LogoCallCard

const CardCall = styled.li`
  display: flex;
  flex-direction: column;

  transition: all 300ms ease;

  &:hover {
    transform: scale(1.15)
  }
  

  h2 {
    text-align: center;
    margin-top: 20px;
  }

  .container__img {
    height: 150px;
    width: 150px;

    img {
      height: 100%;
      width:100%;
      object-fit: fill;
    }
  }

`
