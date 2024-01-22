import React from 'react'
import styled from 'styled-components';

const RecentWorks = () => {
  return (
    <Works>
        <h2>My recent Works</h2>
        <div className='container__cardworks'>
            <div className='img__portada'>
                <img src="/images/works/pokedexWeb.JPG" alt="" />
            </div>
            <article className='cardwork'>
                <div className='boddy_title'>
                    <h3>Pokemon</h3>
                </div>
            </article>
        </div>
    </Works>
  )
}

export default RecentWorks;

const Works = styled.section`

    h2 {
        text-align: center;
        font-size: 32px ;
    }

    .container__cardworks {
        margin-top: 50px;
    }

    .cardwork {

    }

    .img__portada {

        height: 250px;
        width: 350px;
        
        img{
            width: 100%;
            height: 100%;
            object-fit: cover ;
        }
    }
    
`