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
  padding-top: 100px; /* Accounts for fixed navbar spacing */
`;

const SectionHero = styled.section`
  min-height: 100vh;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
`