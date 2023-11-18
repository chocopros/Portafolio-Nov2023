import React from 'react';
import styled from 'styled-components';





const AboutMe = () => {
  return (
    <MainContainer>

      <SectionHero>

        <div className='container__Main'>
          <div className='container__portada'>
            <img src="https://www.iamthecode.org/wp-content/uploads/2021/03/florian-olivo-4hbJ-eymZ1o-unsplash-scaled-e1616631053918.jpg" alt="portada user"  />
          </div>
          <div className='container__photo'>
            <img src="public\images\profile270x270.jpg" alt="" />
          </div>
        </div>

        <div className='boddy__info'>
            <div className='btn__follow'>
                <button>Follow <i className="fa-brands fa-twitter"></i>  </button>
            </div>
            <h2>Jesus Arechider</h2>
            <h3>Brings ideas to life with code! ✨</h3>
            <p className='des__job'>Development Web. Creative content Creator.
            Electrical Engineering. IT Support. Marching Learning in process.
            </p>
            <ul className='details__info'>
              <li> <i className="fa-solid fa-briefcase fa-bounce" style={{color:'green'}}></i> Avalible</li>
              <li> <i className="fa-solid fa-link"></i>/works</li>
              <li> <i class="fa-solid fa-cake-candles"></i> Dicember 1st, 1993</li>
              <li> <i class="fa-solid fa-calendar-days"></i> Joined Jan 2023</li>
            </ul>
        </div>

        <div className='aboutme_info'>
          <h2><i className="fa-solid fa-person"></i> About Me</h2>
          <p>
          Passionate about technology and computer advances, versatile in any technology, from electricity, electronics, graphic design, web programming, technical support, machine learning, learning something new every day. Thanks to my own confidence, I can add a lot of value by developing anywhere.
           My goal is to continue learning with technology, learn a little more every day and look for a workplace where I can be a part.
          </p>
        </div>
        
       

      
      </SectionHero>



    </MainContainer>
  )
}

export default AboutMe;



const MainContainer = styled.main`

  background-color: rgb(32, 32, 35);
  
  

`;

const SectionHero = styled.section`
  
  min-height: 100vh;
  padding-top: 100px;
  color: white;
  max-width: 1024px;

  margin: 0 auto;

  .container__Main {
    position: relative;
  }

  .container__portada {
    width: 1024px;
    
    img {
      width: 100%;
      height: 323px;
      object-fit: cover;
    }
  }

  .container__photo {
    position: absolute;
    bottom: -120px;
    left: 50px;
    
    width: 270px;
    height: 270px;
    

    img {
      width: 100%;
      height: 270px;
      object-fit: cover;
      border-radius: 50%;
      border: 7px solid white;
      
    }
  }

  .boddy__info {
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    gap: 10px;
    margin-top: 20px;

    .btn__follow {
      display: flex;
      justify-content: end;
      align-items: center;
      margin: 25px 0;
      
      button {
        color: white;
        border-style: none;
        padding: 15px 35px;
        border-radius: 30px;
        background-color: rgb(255 51 187);
        margin-right: 100px;
        font-size: 16px;
        font-weight: 700;
        
      }
    }

    h2 {
      font-size: 50px;
    }

    h3 {
      font-size: 20px;
    }

    .des__job{
      max-width: 70%;
    }

    .details__info{
      display: flex;
      gap: 50px;
      list-style: none;
    }
  }

  .aboutme_info {
    margin-top: 20px;
    padding: 20px 50px;
    h2 {
      font-size: 35px;
    }
    p {
      margin-top: 15px;
      text-align: justify;
    }
  }



`


