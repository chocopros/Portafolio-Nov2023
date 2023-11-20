import React from 'react';
import styled from 'styled-components';
import Portada from './details/Portada';
import BodyInfo from './details/BodyInfo';
import AboutMeinfo from './details/AboutMeinfo';
import BioInfoList from './details/BioInfoList';
import LoveMe from './details/LoveMe';


const AboutMe = () => {
  return (
    <MainContainer>

      <SectionHero>

        <Portada />
        <BodyInfo />
        <AboutMeinfo />
        <BioInfoList />
        <LoveMe />
        
      </SectionHero>
      
    </MainContainer>
  )
}

export default AboutMe;



const MainContainer = styled.main`

  background-color: rgb(32, 32, 35);
  
  

`;

const SectionHero = styled.section`
  
  min-height: 100vh;
  padding-top: 100px;
  
  color: white;
  max-width: 1024px;
  margin: 0 auto;

  padding-bottom:50px;

`


