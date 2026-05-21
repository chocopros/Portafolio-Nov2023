import React from 'react'
import styled from 'styled-components';
import CardWork from '../../../utils/CardWork';

const RecentWorks = () => {
  return (
    <Works>
        <h2>My recent Works</h2>
        <div className='container__cardworks'>

            {/* POKEDEX-API */}
            <a href="https://pokeapi-jarechider.netlify.app/#/" target="_blank" rel="noopener noreferrer">
                <CardWork 
                    title="Pokedex"
                    img="/images/works/pokedexWeb.JPG"
                />  
            </a>

            {/* RICK&MORTY-API */}
            <a href="https://rickandmorty-anmyandjesus.netlify.app/" target="_blank" rel="noopener noreferrer">
                <CardWork 
                    title="Rick & Morty"
                    img="/images/works/RM.jpg"
                />  
            </a>

            {/* TIMECOUNTRY-API */}
            <a href="https://wheatermap-arechider.netlify.app/" target="_blank" rel="noopener noreferrer">
                <CardWork 
                    title="Weather Map"
                    img="/images/works/TimeCountry.jpg"
                />  
            </a>
           
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
        padding: 0 25px;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }


    

    
`