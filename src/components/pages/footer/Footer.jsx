import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterMain>
        @ 2023 Jesus Arechider. All Rights Reserved.
    </FooterMain>
  )
}

export default Footer;

const FooterMain = styled.footer`

  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  color:rgba(255, 255, 255, 0.9);
  background-color: rgb(32, 32, 35);
  text-align: center;
  
`