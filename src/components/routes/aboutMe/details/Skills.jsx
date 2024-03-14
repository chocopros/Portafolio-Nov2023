import React from 'react'
import styled from 'styled-components'
import ImgCode from '../../../utils/ImgCode'


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
                titleLogo='GitHub'
                urlLink='/images/logos/github-icon-1.svg'
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
              <ImgCode
                titleLogo='Python'
                urlLink='/images/logos/python-5.svg'
              />
              <ImgCode
                titleLogo='Flask'
                urlLink='/images/logos/flask-svgrepo-com (1).svg'
              />
            </ul>
          </div>

        </CardSkill>

        <CardSkill>
          <i className="fa-solid fa-code"></i>
          <h3 className='title__card'>Favorite Tool Web Developer</h3>
          <div className='boddy__card'>
            <p>the simplicity of the tool and the efficiency of the work makes the right tool</p>
            <h4>My favorite tools:</h4>
            <ul className='list__code'>
              <ImgCode
                titleLogo='Visual Studio Code'
                urlLink='/images/logos/visual-studio-code-1.svg'
              />
              <ImgCode
                titleLogo='DBeaver'
                urlLink='/images/logos/DBeaver-head.png'
              />
              <ImgCode
                titleLogo='Adobe Photoshop'
                urlLink='/images/logos/adobe-photoshop.svg'
              />
              <ImgCode
                titleLogo='Office 365 package'
                urlLink='/images/logos/Microsoft-365.svg'
              />
              <ImgCode
                titleLogo='Teams'
                urlLink='/images/logos/microsoft-teams-1.svg'
              />
              <ImgCode
                titleLogo='Discord'
                urlLink='/images/logos/discord.svg'
              />
              <ImgCode
                titleLogo='Gmail'
                urlLink='/images/logos/gmail-icon.svg'
              />
              <ImgCode
                titleLogo='Slack'
                urlLink='/images/logos/slack.svg'
              />
              <ImgCode
                titleLogo='Notion'
                urlLink='/images/logos/notion-2.svg'
              />


            </ul>
          </div>

        </CardSkill>

        <CardSkill>
          <i className="fa-solid fa-code"></i>
          <h3 className='title__card'>IT Support</h3>
          <div className='boddy__card'>
            <p>If you have a backup, the hardware and software problems are small and temporary.</p>
            <h4>Languages I speak:</h4>
            <ul className='list__code'>
              <ImgCode
                titleLogo='Technical Support'
                urlLink='/images/logos/technical-support.svg'
              />
              <ImgCode
                titleLogo='Windows Support'
                urlLink='/images/logos/microsoft-windows-22.svg'
              />
              <ImgCode
                titleLogo='Linux Support'
                urlLink='/images/logos/linux-tux.svg'
              />
              <ImgCode
                titleLogo='TeamVierwer'
                urlLink='/images/logos/TeamViewer_Logo_Icon_Only.svg.png'
              />
              <ImgCode
                titleLogo='Hardware & Maintenance'
                urlLink='/images/logos/hardware.jpg'
              />
              <ImgCode
                titleLogo='Software & Security'
                urlLink='/images/logos/appStore.svg'
              />
              <ImgCode
                titleLogo='Data Backup & Recovery'
                urlLink='/images/logos/backup-svgrepo-com.svg'
              />
              <ImgCode
                titleLogo='Networking Support'
                urlLink='/images/logos/networking-support.svg'
              />
              <ImgCode
                titleLogo='Learning technologies'
                urlLink='/images/logos/learning-sofware.svg'
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

    p{
     text-align: center;
    }

    .list__code {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 30px 0;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
      padding: 0 35px;

    }

    
  }
  
`