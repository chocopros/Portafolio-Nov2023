import React from 'react'
import styled from 'styled-components';
import CardsLoveMe from '../../../utils/CardsLoveMe';

const LoveMe = () => {
  return (
    <LoveThis>
      <h2>I Love ♥ </h2>
      <ul className='container__cardsLove'>

        <CardsLoveMe
          title={`Terraria`}
          linkImg={`/images/Love/Terraria.webp`}
          description={`Terraria is an action, adventure and sandbox video game`}
        />

        <CardsLoveMe
          title={`Dota 2`}
          linkImg={`/images/Love/DOTA2.webp`}
          description={`MOBA belonging to the ARTS online battle arena genre.`}
        />

        <CardsLoveMe
          title={`Plants Vs Zombies`}
          linkImg={`/images/Love/PvsZ.webp`}
          description={`¡The zombies are coming! Protect the brains and plant your defenses`}
        />

      </ul>
    </LoveThis>
  )
}

export default LoveMe;

const LoveThis = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 50px;

    h2 {
      font-size: 35px;
      transition: all 1s ease;
    }

    h2:hover{
      color: red;
    }

    .container__cardsLove {
      margin: 30px 0;
      list-style: none;

      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      gap: 10px;
    }

    
`