import React from 'react';
import styled from 'styled-components';



const AboutMe = () => {
  return (
    <MainContainer>
      <div>
        <h2>about</h2>
        <h3>I'm development web, Electrical Engineering & IT Support based in Anzoategui, Venezuela</h3>
      </div>

      <img src='public\images\profile1.jpg' alt="" />

    </MainContainer>
  )
}

export default AboutMe;

const MainContainer = styled.section`

  min-height: calc(100vh - 150px ) ;
  background-color: #fff;
  color: black;

  padding: 100px 100px;

  display: flex;

  h3 {
    
  }

  img {
    height: 300px;
  }

  

`;

const SectionHero = styled.section`
  

`


