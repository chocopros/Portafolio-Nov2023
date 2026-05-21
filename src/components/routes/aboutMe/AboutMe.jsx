import React from 'react';
import styled from 'styled-components';
import Portada from './details/Portada';
import BodyInfo from './details/BodyInfo';
import AboutMeinfo from './details/AboutMeinfo';
import BioInfoList from './details/BioInfoList';
import LoveMe from './details/LoveMe';
import Skill from './details/Skills.jsx'

const AboutMe = () => {
  return (
    <MainContainer>
      <HeroSection>
        <Portada />
        <BodyInfo />
      </HeroSection>
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
  padding-top: 100px; /* Accounts for fixed navbar */
`;

const HeroSection = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding-bottom: 30px;
  color: white;
`;

const SectionHero = styled.section`
  color: white;
  max-width: 1024px;
  margin: 0 auto;
  padding-bottom: 50px;
`


