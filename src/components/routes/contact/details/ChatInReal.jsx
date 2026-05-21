import React from 'react'
import styled from 'styled-components'
import LogoCallCard from '../../../utils/LogoCallCard'

const ChatInReal = () => {
  return (
    <ChatReal>

        <h2>Write to me in real time!!!</h2>

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

const ChatReal = styled.section`
    

`
const ContainerLogo = styled.ul`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap:  50px 150px;

    margin: 30px 0;

    a {
        text-decoration: none;
        color: #fff;
    }

`

