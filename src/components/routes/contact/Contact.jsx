import React from 'react'
import styled from 'styled-components'
import MyInfoPdf from './details/MyInfoPdf'
import ChatInReal from './details/ChatInReal'

const Contact = () => {
  return (
    <MainContainer>
        <SectionHero>
            <div className="contact__header">
                <h2>Get In Touch</h2>
                <p>Let's collaborate! Download my professional credentials or reach out directly on live chat to discuss projects and opportunities.</p>
            </div>
            <div className="contact__grid">
                <MyInfoPdf />
                <ChatInReal />
            </div>
        </SectionHero>
    </MainContainer>
  )
}

export default Contact

const MainContainer = styled.main`
  background-color: rgb(20, 20, 23);
  padding-top: 120px;
  padding-bottom: 80px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  /* Subtle background ambient blobs to create depth */
  &::before {
    content: '';
    position: absolute;
    top: 15%;
    left: 10%;
    width: 300px;
    height: 300px;
    background: rgba(255, 51, 187, 0.05);
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 15%;
    right: 10%;
    width: 350px;
    height: 350px;
    background: rgba(0, 172, 255, 0.04);
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
  }
`;

const SectionHero = styled.section`
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;

  .contact__header {
    text-align: center;
    max-width: 650px;
    margin: 0 auto 60px auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    animation: fadeInDown 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) both;

    h2 {
      font-size: 36px;
      font-weight: 800;
      color: #ffffff;
      margin: 0;
      letter-spacing: -0.5px;
      background: linear-gradient(135deg, #ffffff 30%, #e0e0e0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        display: block;
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, rgb(255, 51, 187), rgb(0, 172, 255));
        margin: 14px auto 0 auto;
        border-radius: 2px;
      }
    }

    p {
      font-size: 16px;
      color: #a0a0a8;
      line-height: 1.6;
      margin: 0;
    }
  }

  .contact__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    align-items: start;
    width: 100%;
    animation: fadeInUp 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) 0.2s both;
  }

  @media(min-width: 992px) {
    .contact__header {
      h2 { font-size: 46px; }
      p { font-size: 18px; }
    }

    .contact__grid {
      grid-template-columns: 1.1fr 0.9fr;
      gap: 40px;
    }
  }

  /* Keyframe Animations */
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;