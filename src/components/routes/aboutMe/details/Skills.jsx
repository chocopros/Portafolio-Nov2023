import React from 'react'
import styled from 'styled-components'
import ImgCode from '../../../Utils/ImgCode'


const SkillsAlls = () => {
  return (
    <ContanerSkills>
      <h2>Skills</h2>
      <Container>
        <CardSkill>
          <i className="fa-solid fa-code"></i>
          <h3 className='title__card'>Frontend Developer</h3>
          <div className='boddy__card'>
            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <h4>Languages I speak:</h4>
            <ul className='list__code'>
              <ImgCode
                titleLogo='HTML5'
                urlLink='/images/logos/HTML5_logo.svg'
              />
              <ImgCode
                titleLogo='CCS3'
                urlLink='/images/logos/CSS3_logo.svg'
              />
              <ImgCode
                titleLogo='Javascript'
                urlLink='/images/logos/JavaScript-logo.png'
              />
              <ImgCode
                titleLogo='React Js'
                urlLink='/images/logos/React.svg.png'
              />
              <ImgCode
                titleLogo='Vite Js'
                urlLink='/images/logos/vitejs.svg'
              />
              <ImgCode
                titleLogo='Redux'
                urlLink='/images/logos/redux.svg'
              />
              <ImgCode
                titleLogo='Styled Components'
                urlLink='/images/logos/styled-components-1.svg'
              />
              <ImgCode
                titleLogo='Flutter'
                urlLink='/images/logos/flutter.svg'
              />
              <ImgCode
                titleLogo='Netlify'
                urlLink='/images/logos/netlify.svg'
              />
            </ul>
          </div>
        </CardSkill>
        
        <CardSkill>
          <i className="fa-solid fa-code"></i>
          <h3 className='title__card'>Backend Developer</h3>
          <div className='boddy__card'>
            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <h4>Languages I speak:</h4>
            <ul className='list__code'>
              <ImgCode
                titleLogo='Node Js'
                urlLink='/images/logos/nodejs-1.svg'
              />
              <ImgCode
                titleLogo='Express'
                urlLink='/images/logos/express.svg'
              />
              <ImgCode
                titleLogo='Sequelize'
                urlLink='/images/logos/Sequelize.svg'
              />
              <ImgCode
                titleLogo='Passport-jwt'
                urlLink='/images/logos/passport.svg'
              />
              <ImgCode
                titleLogo='Postgresql'
                urlLink='/images/logos/postgresql.svg'
              />
              <ImgCode
                titleLogo='Docker'
                urlLink='/images/logos\docker.svg'
              />
            </ul>
          </div>

        </CardSkill>

        <CardSkill>
          <i className="fa-solid fa-code"></i>
          <h3 className='title__card'>Favorite Tool</h3>
          <div className='boddy__card'>
            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <h4>Languages I speak:</h4>
            <ul className='list__code'>
              <ImgCode
                titleLogo='Node Js'
                urlLink='/images/logos/nodejs-1.svg'
              />
              <ImgCode
                titleLogo='Express'
                urlLink='/images/logos/express.svg'
              />
              <ImgCode
                titleLogo='Sequelize'
                urlLink='/images/logos/Sequelize.svg'
              />
              <ImgCode
                titleLogo='Passport-jwt'
                urlLink='/images/logos/passport.svg'
              />
              <ImgCode
                titleLogo='Postgresql'
                urlLink='/images/logos/postgresql.svg'
              />
              <ImgCode
                titleLogo='Docker'
                urlLink='/images/logos\docker.svg'
              />
            </ul>
          </div>

        </CardSkill>

      </Container>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

const CardSkill = styled.article`
  max-width: 924px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1b1b1b;
  border-radius: 15px;
  padding: 50px 50px;
  margin: 30px 0;

  i {
    font-size: 36px;
    border: 15px solid black;
    background-color: black;
    border-radius: 50%;
    
  }

  .title__card{
    font-size: 35px;
    margin: 20px 0;
  }

  .boddy__card {
    display: flex;
    flex-direction: column;


    h4 { 
      text-align: center;
      margin: 20px 0;
    }

    .list__code {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
      padding: 0 35px;

    }

    
  }
  
`