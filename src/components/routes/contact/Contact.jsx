import React from 'react'
import styled from 'styled-components'
import MyInfoPdf from './details/MyInfoPdf'


const Contact = () => {
  return (
    <MainContainer>

        <SectionHero>

            <MyInfoPdf />

        </SectionHero>

    </MainContainer>
  )
}

export default Contact

const MainContainer = styled.main`

  background-color: rgb(32, 32, 35);
`;

const SectionHero = styled.section`
  
  min-height: 100vh;
  
  color: white;
  max-width: 1024px;
  margin: 0 auto;
`