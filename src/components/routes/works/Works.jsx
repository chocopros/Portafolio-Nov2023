import React from 'react'
import styled from 'styled-components'
import RecentWorks from './RecentWork/RecentWorks';



const Works = () => {
  return (
    <MainContainer>
        <SectionHero>
            
                <RecentWorks />
            
            
        </SectionHero>
    </MainContainer>
  )
}

export default Works;

const MainContainer = styled.main`
  background-color: rgb(32, 32, 35);
`;

const SectionHero = styled.section`
  
  min-height: 100vh;
  
  color: white;
  max-width: 1024px;
  margin: 0 auto;

`