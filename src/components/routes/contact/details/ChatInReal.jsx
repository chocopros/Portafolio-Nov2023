import React from 'react'
import styled from 'styled-components'
import LogoCallCard from '../../../utils/LogoCallCard'


const ChatInReal = () => {
  return (
    <ChatReal>

        <h2>Write to me in real time!!!</h2>

        <ContainerLogo>

            <LogoCallCard
                title={`Whatsapp`}
                urlLogo={`/images/logos/whatsapp.svg`}
            />

            <LogoCallCard
                title={`Telegram`}
                urlLogo={`/images/logos/telegram.svg`}
            />

            <LogoCallCard
                title={`Discord`}
                urlLogo={`/images/logos/discord.svg`}
            />

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
    gap: 50px;

    margin: 30px 0;

`

