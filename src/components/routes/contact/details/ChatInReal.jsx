import React from 'react'
import styled from 'styled-components'
import LogoCallCard from '../../../utils/LogoCallCard'

const ChatInReal = () => {
  return (
    <ChatReal>
        <div className="chat__header">
            <div className="chat__icon">
                <i className="fa-solid fa-comments"></i>
            </div>
            <div className="chat__text">
                <h2>Direct Channels</h2>
                <p>Choose your preferred messaging platform below to start a live conversation with me. I usually reply within a few hours!</p>
            </div>
        </div>

        <ContainerLogo>

            <a href="https://api.whatsapp.com/send?phone=584148100986&text=Hello%2C%20Jesus%2C%20I%20have%20seen%20your%20portfolio!%F0%9F%A6%BE" target="_blank" rel="noopener noreferrer">
                <LogoCallCard
                    title="Whatsapp"
                    urlLogo="/images/logos/whatsapp.svg"
                />
            </a>

            <a href="https://telegram.me/Jesuschock" target="_blank" rel="noopener noreferrer">
                <LogoCallCard
                    title="Telegram"
                    urlLogo="/images/logos/telegram.svg"
                />
            </a>

            <a href="https://discord.com/users/jesuschock" target="_blank" rel="noopener noreferrer">
                <LogoCallCard
                    title="Discord"
                    urlLogo="/images/logos/discord.svg"
                />
            </a>

        </ContainerLogo>

    </ChatReal>
  )
}

export default ChatInReal

const ChatReal = styled.article`
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

  .chat__header {
    display: flex;
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    padding-bottom: 20px;

    .chat__icon {
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

    .chat__text {
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
    
    .chat__header {
      .chat__text {
        h2 {
          font-size: 22px;
        }
      }
    }
  }
`

const ContainerLogo = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 24px 0 0 0;
  padding: 0;
  width: 100%;

  a {
    text-decoration: none;
    color: #fff;
  }

  @media(min-width: 768px) {
    gap: 30px;
    margin: 40px 0 0 0;
  }
`
