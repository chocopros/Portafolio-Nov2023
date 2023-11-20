import React from 'react'
import styled from 'styled-components'

const CardsLoveMe = ( {title, description,linkImg} ) => {
    return (
        <CardLove>
            <div className='container__img'>
                <img src={linkImg} alt="Terraria VideoGame" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </CardLove>
    )
}

export default CardsLoveMe

const CardLove = styled.li`

    width: 250px;
    transition: all 300ms ease;

    &:hover {
        transform: scale(1.15)
    }
  
    
    .container__img {
      height:150px;
      width: 250px;
      

      img {
        height: 100%;
        width: 100%;
        border-radius: 15px;
        object-fit: fill;
      }
    }
    h3 {
        text-align: center;
        margin: 10px 0;
    }

    p{
        text-align: justify;
        font-size: 14px;
        color: #999999;
        padding: 0 10px;
    }
`