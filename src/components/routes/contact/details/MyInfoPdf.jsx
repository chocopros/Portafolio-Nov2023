import React from 'react'
import styled from 'styled-components'
import LinkCV from '../../../utils/LinkCV'

const MyInfoPdf = () => {
  return (
    <DownloadPdf>
        <div className="vault__header">
            <div className="vault__icon">
                <i className="fa-solid fa-folder-open"></i>
            </div>
            <div className="vault__text">
                <h2>Resume Vault</h2>
                <p>Download my professional resumes, structured specifically for individual disciplines and engineering profiles.</p>
            </div>
        </div>
        
        <ContainerPdf>
            <LinkCV 
                linkDocument='/documents/CV-JESUSARECHIDER-DEV-2024.pdf'
                titleCv='Frontend Web Developer'
                LastUpdate='2024-MAR-17'
                description='Specialized credentials in React.js, modern styled environments, REST integrations, and high-fidelity interface design.'
            />

            <LinkCV
                linkDocument='/documents/CV-JESUSARECHIDER-IT.pdf'
                titleCv='IT Support Specialist'
                LastUpdate='2024-JAN-10'
                description='System administration resume covering hardware diagnostics, security setups, networks, and remote desktop services.'
            />

            <LinkCV 
                linkDocument='/documents/CV - JESUS ARECHIDER - INGENIERO ELECTRICISTA.pdf'
                titleCv='Electrical Engineer'
                LastUpdate='2023-NOV-15'
                description='Engineering credentials focusing on power systems, automation circuits, CAD drafting, and technical project management.'
            />
        </ContainerPdf>
    </DownloadPdf>
  )
}

export default MyInfoPdf

const DownloadPdf = styled.article`
  background: rgba(30, 30, 35, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(255, 51, 187, 0.2);
  }

  .vault__header {
    display: flex;
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    padding-bottom: 20px;

    .vault__icon {
      font-size: 26px;
      color: rgb(255, 51, 187);
      background: rgba(255, 51, 187, 0.08);
      width: 52px;
      height: 52px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .vault__text {
      text-align: left;
      
      h2 {
        font-size: 20px;
        font-weight: 600;
        color: #ffffff;
        margin: 0;
      }

      p {
        font-size: 13px;
        color: #a0a0a5;
        margin: 4px 0 0 0;
        line-height: 1.4;
      }
    }
  }

  @media(min-width: 768px) {
    padding: 30px;
    
    .vault__header {
      .vault__text {
        h2 {
          font-size: 22px;
        }
      }
    }
  }
`

const ContainerPdf = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 24px 0 0 0;
  width: 100%;
`

