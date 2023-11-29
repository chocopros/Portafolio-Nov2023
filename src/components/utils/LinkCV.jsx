import React from 'react'
import styled from 'styled-components'

const LinkCV = ({linkDocument, titleCv, LastUpdate}) => {
  return (
    <LiCV>
        <a href={linkDocument}>
          <div className="container__img">
            <img src="/images/logos\pdf-file-svgrepo-com.svg" alt="" />
          </div>
          <h3>{titleCv}</h3>
          <p>{`last update: ${LastUpdate || `2023-NOV-1`}`}</p>
        </a>
    </LiCV>
  )
}

export default LinkCV

const LiCV = styled.li`
    max-width: 168px;
    font-style: none;
    transition: all 300ms ease;

    &:hover {
        transform: scale(1.15)
    }

    a {
      height: 234px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content:space-evenly;

      text-decoration: none;
     
    }

    .container__img {
      width: 168px;
      height: 168px;
    }

    h3 {
      margin-top: 10px;
      color: white;
      font-size: 15px;
      text-align: center;
    }

    p {
      font-size: 12px;
      color: #7d7d7d
      
      
    }


`