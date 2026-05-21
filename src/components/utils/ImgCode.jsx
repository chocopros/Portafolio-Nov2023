import React from 'react'
import styled from 'styled-components'

const ImgCode = ( {titleLogo, urlLink}) => {
    return (
        <ElementList className='code'>
            <div className='container__img'>
                <img src={urlLink} alt={`Logo of ${titleLogo}`} />
            </div>
            <h3>{titleLogo}</h3>
        </ElementList>
    )
}

export default ImgCode

const ElementList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 40px;
  width: 100px;
  height: 140px;

  .container__img {
    height: 90px;
    width: 90px;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  h3 {
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
    color: #e0e0e0;
  }
`