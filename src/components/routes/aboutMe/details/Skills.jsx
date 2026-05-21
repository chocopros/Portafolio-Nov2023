import React from 'react'
import styled from 'styled-components'
import ImgCode from '../../../utils/ImgCode'


const SkillsAlls = () => {
  return (
    <SkillsContainer>
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
                titleLogo='CSS3'
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
                urlLink='/images/logos/docker.svg'
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
                titleLogo='TeamViewer'
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
    </SkillsContainer>
  )
}

export default SkillsAlls

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  h2 {
    font-size: 35px;
    transition: color 0.4s ease;
  }

  h2:hover {
    color: rgb(255, 51, 187);
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const CardSkill = styled.article`
  max-width: 924px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a1e;
  border-radius: 16px;
  padding: 3rem 1.5rem;
  margin: 20px 0;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 51, 187, 0.3);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3), 0 0 25px rgba(255, 51, 187, 0.04);
  }

  @media(min-width: 768px) {
    padding: 3rem 3rem;
  }

  i {
    font-size: 36px;
    border: 15px solid #111;
    background-color: #111;
    color: rgb(255, 51, 187);
    border-radius: 50%;
  }

  .title__card {
    font-size: 30px;
    margin: 20px 0;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
  }

  .boddy__card {
    display: flex;
    flex-direction: column;
    width: 100%;

    h4 { 
      text-align: center;
      margin: 25px 0 15px 0;
      color: rgba(255, 255, 255, 0.7);
      font-weight: 500;
    }

    p {
      text-align: center;
      color: #b0b0b5;
      line-height: 1.6;
    }

    .list__code {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 30px 10px;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
      padding: 0 10px;

      @media(min-width: 768px) {
        padding: 0 35px;
      }
    }
  }
`