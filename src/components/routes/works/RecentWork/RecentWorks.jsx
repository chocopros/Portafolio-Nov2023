import React from 'react'
import styled from 'styled-components';
import CardWork from '../../../utils/CardWork';

const RecentWorks = () => {
  return (
    <Works>
        <div className="works__header">
            <h2>My Recent Works</h2>
            <p>A curated collection of interactive web applications demonstrating clean structure, robust state handling, and optimized frontend design.</p>
        </div>
        <div className='container__cardworks'>

            {/* POKEDEX-API */}
            <a href="https://pokeapi-jarechider.netlify.app/#/" target="_blank" rel="noopener noreferrer">
                <CardWork 
                    title="Pokedex"
                    img="/images/works/pokedexWeb.JPG"
                    description="An interactive Pokémon encyclopedia powered by the PokéAPI. Filter species by type, search your favorite creatures, and explore detailed battle stats in a beautiful, responsive layout."
                    tags={['React', 'REST API', 'CSS Grid', 'Adaptive Colors']}
                />  
            </a>

            {/* RICK&MORTY-API */}
            <a href="https://rickandmorty-anmyandjesus.netlify.app/" target="_blank" rel="noopener noreferrer">
                <CardWork 
                    title="Rick & Morty"
                    img="/images/works/RM.jpg"
                    description="A multi-featured companion app for the Rick and Morty series. Smoothly query location arrays, character descriptions, and episode information featuring dynamic routing and full pagination."
                    tags={['React', 'Axios', 'Netlify', 'Dynamic Pagination']}
                />  
            </a>

            {/* TIMECOUNTRY-API */}
            <a href="https://wheatermap-arechider.netlify.app/" target="_blank" rel="noopener noreferrer">
                <CardWork 
                    title="Weather Map"
                    img="/images/works/TimeCountry.jpg"
                    description="Get real-time ambient updates using geolocation. This app translates real-time forecasts, temperature trends, wind parameters, and atmospheric conditions for global cities."
                    tags={['React', 'Weather API', 'Styled Components', 'Geolocation']}
                />  
            </a>

            {/* JDATECH E-COMMERCE */}
            <a href="https://jdatech.netlify.app/" target="_blank" rel="noopener noreferrer">
                <CardWork 
                    title="JDATECH"
                    img="/images/works/jdatech.png"
                    description="A premium e-commerce platform for software licenses and high-tech digital assets. Features high-fidelity glassmorphism product grids, reactive filters, and custom shopping cart workflows."
                    tags={['React', 'E-Commerce', 'Vite', 'Software Licenses', 'TailwindCSS']}
                />  
            </a>

            {/* MARIELBA OPTOMETRIC */}
            <a href="https://marielbaoptometric.netlify.app/" target="_blank" rel="noopener noreferrer">
                <CardWork 
                    title="Marielba Optometric"
                    img="/images/works/marielba.png"
                    description="A modern boutique optics online platform integrated with an automated medical appointment scheduler. Discover designer frames, customize lens parameters, and book professional clinical consulting services."
                    tags={['React', 'Medical Booking', 'styled-components', 'Boutique Optics']}
                />  
            </a>
           
        </div>
    </Works>
  )
}

export default RecentWorks;

const Works = styled.section`
  padding: 40px 15px;
  max-width: 1200px;
  margin: 0 auto;

  .works__header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 50px auto;
    display: flex;
    flex-direction: column;
    gap: 16px;

    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #ffffff;
      margin: 0;
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        display: block;
        width: 60px;
        height: 4px;
        background: rgb(255, 51, 187);
        margin: 12px auto 0 auto;
        border-radius: 2px;
      }
    }

    p {
      font-size: 15px;
      color: #b0b0b5;
      line-height: 1.6;
      margin: 0;
    }
  }

  .container__cardworks {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    margin-top: 30px;

    a {
      text-decoration: none;
      color: inherit;
      display: block;
      height: 100%;
    }
  }

  @media(min-width: 768px) {
    padding: 60px 30px;
    
    .works__header {
      h2 {
        font-size: 40px;
      }
      p {
        font-size: 17px;
      }
    }

    .container__cardworks {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 35px;
    }
  }
`