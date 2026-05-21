import React from 'react'
import styled from 'styled-components'

const LinkCV = ({ linkDocument, titleCv, LastUpdate, description }) => {
  return (
    <LiCV>
      <a href={linkDocument} target="_blank" rel="noopener noreferrer">
        <div className="container__img">
          <img src="/images/logos/pdf-file-svgrepo-com.svg" alt="PDF Icon" />
        </div>
        <div className="cv__details">
          <h3>{titleCv}</h3>
          <p className="description">{description || "Professional credentials and summary of experience."}</p>
          <span className="update">{`Updated: ${LastUpdate || '2024-MAR'}`}</span>
        </div>
        <div className="download__btn">
          <i className="fa-solid fa-cloud-arrow-down"></i>
        </div>
      </a>
    </LiCV>
  )
}

export default LinkCV

const LiCV = styled.li`
  list-style: none;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 16px;

  a {
    display: flex;
    align-items: center;
    padding: 16px 20px;
    text-decoration: none;
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 51, 187, 0.03);
    border-color: rgba(255, 51, 187, 0.25);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  .container__img {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 51, 187, 0.08);
    border-radius: 10px;
    margin-right: 16px;
    transition: transform 0.3s ease;

    img {
      width: 26px;
      height: 26px;
      object-fit: contain;
    }
  }

  &:hover .container__img {
    transform: scale(1.08);
    background: rgba(255, 51, 187, 0.12);
  }

  .cv__details {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex-grow: 1;
    text-align: left;

    h3 {
      font-size: 15px;
      font-weight: 600;
      color: #ffffff;
      margin: 0;
      transition: color 0.3s ease;
    }

    .description {
      font-size: 12px;
      color: #a0a0a5;
      line-height: 1.4;
      margin: 0;
    }

    .update {
      font-size: 10px;
      color: rgba(255, 255, 255, 0.35);
      font-weight: 500;
    }
  }

  &:hover .cv__details h3 {
    color: rgb(255, 51, 187);
  }

  .download__btn {
    flex-shrink: 0;
    color: rgba(255, 255, 255, 0.3);
    font-size: 18px;
    margin-left: 16px;
    transition: all 0.3s ease;
  }

  &:hover .download__btn {
    color: rgb(255, 51, 187);
    transform: scale(1.15);
  }
`