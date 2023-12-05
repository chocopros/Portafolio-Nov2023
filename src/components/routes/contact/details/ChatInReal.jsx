import React from 'react'
import styled from 'styled-components'
import LogoCallCard from '../../../utils/LogoCallCard'
import {Link} from 'react-router-dom'




const ChatInReal = () => {
  return (
    <ChatReal>

        <h2>Write to me in real time!!!</h2>

        <ContainerLogo>

            <Link to={`https://api.whatsapp.com/send?phone=584148100986&text=Hello%2C%20Jesus%2C%20I%20have%20seen%20your%20portfolio!%F0%9F%A6%BE`}>
                <LogoCallCard
                    title={`Whatsapp`}
                    urlLogo={`/images/logos/whatsapp.svg`}
                />
            </Link>

            <Link to={`https://telegram.me/Jesuschock`}>
                <LogoCallCard
                    title={`Telegram`}
                    urlLogo={`/images/logos/telegram.svg`}
                />
            </Link>

            <Link>
                <LogoCallCard
                    title={`Discord`}
                    urlLogo={`/images/logos/discord.svg`}
                />
            </Link>


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

