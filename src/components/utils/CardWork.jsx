import React from 'react'
import styled from 'styled-components'

const CardWork = ( {title, img }) => {
    return (
        <Card>
            <div className='img__portada'>
                <img src={img} alt="" />
            </div>
            <article className='cardwork'>
                <div className='boddy_title'>
                    <h3>{title}</h3>
                </div>
            </article>
        </Card>
    )
}

export default CardWork

const Card = styled.article`

    width: 400px;
    padding: 15px;

    .img__portada {
        width: 100%;
        height: 250px;

        img {
            width: 100%;
            height: 100%;
        }
    }
    

    h3 {
        color: white;
        text-align: center;
    }

    

`