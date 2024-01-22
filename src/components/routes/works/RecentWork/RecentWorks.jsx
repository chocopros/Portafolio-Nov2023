import React from 'react'
import styled from 'styled-components';
import CardWork from '../../../utils/CardWork';
import { Link } from 'react-router-dom';

const RecentWorks = () => {
  return (
    <Works>
        <h2>My recent Works</h2>
        <div className='container__cardworks'>

            {/* POKEDEX-API */}
            <Link to={`https://pokeapi-jarechider.netlify.app/#/`}>
                <CardWork 
                    title={`Pokedex`}
                    img={'/images/works/pokedexWeb.JPG'}
                />  
            </Link>

            {/* RICK&MORTY-API */}
            <Link to={`https://rickandmorty-anmyandjesus.netlify.app/`}>
                <CardWork 
                    title={`Rick & Morty`}
                    img={'/images/works/RM.jpg'}
                />  
            </Link>

            {/* TIMECOUNTRY-API */}
            <Link to={`https://wheatermap-arechider.netlify.app/`}>
                <CardWork 
                    title={`Wheater Map`}
                    img={'/images/works/TimeCountry.jpg'}
                />  
            </Link>
           
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