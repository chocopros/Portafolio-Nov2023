import React from 'react'
import styled from 'styled-components'

const Portada = () => {
    return (
        <ContainerMain>
            <div className='container__portada'>
                <img src="https://www.iamthecode.org/wp-content/uploads/2021/03/florian-olivo-4hbJ-eymZ1o-unsplash-scaled-e1616631053918.jpg" alt="portada user" />
            </div>
            <div className='container__photo'>
                <img src="/images/profile270x270.jpg" alt="photo perfil" />
            </div>
        </ContainerMain>
    )
}

export default Portada

const ContainerMain = styled.div`
    
    position: relative;

    .container__portada {
      width: 100%;
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


`