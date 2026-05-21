import React from 'react'
import styled from 'styled-components'

const CardWork = ({ title, img, description, tags }) => {
    return (
        <CardContainer>
            <div className='img__portada'>
                <img src={img} alt={`Captura de pantalla de ${title}`} />
                <div className='img__overlay' />
            </div>
            <div className='cardwork'>
                <h3>{title}</h3>
                <p className='description'>{description}</p>
                <div className='tags__container'>
                    {tags && tags.map((tag, idx) => (
                        <span key={idx} className='tag'>{tag}</span>
                    ))}
                </div>
                <div className='action__btn'>
                    <span>Ver Proyecto</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
            </div>
        </CardContainer>
    )
}

export default CardWork

const CardContainer = styled.article`
  background: rgba(30, 30, 35, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 51, 187, 0.35);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(255, 51, 187, 0.08);
  }

  .img__portada {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    background-color: #111;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .img__overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, rgba(20, 20, 24, 0.9) 0%, transparent 100%);
      pointer-events: none;
    }
  }

  &:hover .img__portada img {
    transform: scale(1.08);
  }

  .cardwork {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 14px;
    text-align: left;

    h3 {
      color: #ffffff;
      font-size: 22px;
      font-weight: 600;
      margin: 0;
      letter-spacing: -0.5px;
      transition: color 0.3s ease;
    }

    .description {
      color: #a0a0a5;
      font-size: 14px;
      line-height: 1.6;
      margin: 0;
      flex-grow: 1;
    }

    .tags__container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 4px;

      .tag {
        background: rgba(255, 255, 255, 0.04);
        color: rgba(255, 255, 255, 0.8);
        padding: 4px 10px;
        border-radius: 100px;
        font-size: 11px;
        font-weight: 500;
        border: 1px solid rgba(255, 255, 255, 0.03);
        transition: all 0.3s ease;
      }
    }

    .action__btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: rgb(255, 51, 187);
      font-size: 14px;
      font-weight: 600;
      margin-top: 8px;
      transition: all 0.3s ease;

      i {
        font-size: 12px;
        transition: transform 0.3s ease;
      }
    }
  }

  &:hover .cardwork h3 {
    color: rgb(255, 51, 187);
  }

  &:hover .cardwork .tags__container .tag {
    background: rgba(255, 51, 187, 0.04);
    border-color: rgba(255, 51, 187, 0.15);
    color: rgb(255, 110, 210);
  }

  &:hover .cardwork .action__btn {
    color: rgb(255, 110, 210);

    i {
      transform: translate(3px, -3px);
    }
  }

  @media (min-width: 768px) {
    .img__portada {
      height: 220px;
    }
  }
`