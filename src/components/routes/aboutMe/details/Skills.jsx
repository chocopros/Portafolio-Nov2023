import React from 'react'
import styled from 'styled-components'


const SkillsAlls = () => {
  return (
    <ContanerSkills>
      <h2>Skills</h2>
    </ContanerSkills>
  )
}

export default SkillsAlls

const ContanerSkills = styled.div`
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
    
`

const Container = styled.div`
  
  
`