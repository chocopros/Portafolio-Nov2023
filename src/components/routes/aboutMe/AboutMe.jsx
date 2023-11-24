import React from 'react';
import styled from 'styled-components';
import AboutMeinfo from './details/AboutMeinfo';
import BioInfoList from './details/BioInfoList';
import LoveMe from './details/LoveMe';
import Skill from './details/Skills';

const AboutMe = () => {
  return (
    <MainContainer>

      <SectionHero>

        <AboutMeinfo />
        <BioInfoList />
        <LoveMe />
        <Skill />
        
        
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
  
  color: white;
  max-width: 1024px;
  margin: 0 auto;

  

`


