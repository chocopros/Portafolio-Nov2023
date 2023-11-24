import React from 'react'
import styled from 'styled-components'


const SkillsAlls = () => {
  return (
    <ContanerSkills>
      <h2>Skills</h2>
      <Container>
        <CardSkill>
          <i className="fa-solid fa-code"></i>
          <h3>Frontend Developer</h3>
          <div className='boddy__card'>
            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <h4>Languages I speak:</h4>
            <ul className='list__code'>
              <li className='code'>
                <div className='container__img'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="" />
                </div>
                <h3>HTML5</h3>
              </li>
              <li className='code'>
                <div className='container__img'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png" alt="" />
                </div>
                <h3>CSS</h3>
              </li>
              <li className='code'>
                <div className='container__img'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                </div>
                <h3>JS</h3>
              </li>
              <li className='code'>
                <div className='container__img'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1137px-React.svg.png" alt="" />
                </div>
                <h3>React JS</h3>
              </li>
             
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

  h3{
    font-size: 30px;
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
      margin-top: 20p;

    }

    .code {
      display: flex;
      flex-direction: column;
      align-items: center;
      

      .container__img {
        height: 100px;

        img{
          height: 100%;
        }
      }
    }
    
  }
  
`