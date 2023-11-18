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
                <button>Follow </button>
            </div>
            <h2>Jesus Arechider</h2>
            <h3>Brings ideas to life with code! ✨</h3>
            <p className='des__job'>Development Web. Creative content Creator.
            Electrical Engineering. IT Support. Marching Learning in process.
            </p>
            <span>

            </span>
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
      font-size: 40px;
    }

    h3 {

    }

    .des__job{
      max-width: 70%;
    }


  }



`


