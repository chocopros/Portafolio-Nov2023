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
  justify-content: center;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  width: 90px;
  height: 110px;
  padding: 12px 8px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 51, 187, 0.08);
    border-color: rgba(255, 51, 187, 0.4);
    box-shadow: 0 8px 16px rgba(255, 51, 187, 0.15);
  }

  .container__img {
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;

    img {
      max-height: 100%;
      max-width: 100%;
      width: auto;
      height: auto;
      object-fit: contain;
    }
  }

  &:hover .container__img {
    transform: scale(1.1);
  }

  h3 {
    margin-top: 10px;
    font-size: 11px;
    text-align: center;
    color: #e0e0e0;
    font-weight: 500;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.3s ease;
  }

  &:hover h3 {
    color: #ffffff;
  }

  @media(min-width: 768px) {
    width: 120px;
    height: 140px;
    padding: 18px 12px;
    border-radius: 16px;

    .container__img {
      height: 65px;
      width: 65px;
    }

    h3 {
      font-size: 13px;
      margin-top: 12px;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: visible;
      text-overflow: unset;
    }
  }
`