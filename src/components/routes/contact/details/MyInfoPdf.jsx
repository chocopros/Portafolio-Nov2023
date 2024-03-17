import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LinkCV from '../../../utils/LinkCV'


const MyInfoPdf = () => {
  return (
    <DownloadPdf>
        <h2>Do you want to download my resume?</h2>
        <div>
            <ContainerPdf>
       
                <LinkCV 
                    linkDocument='/documents/CV-JESUSARECHIDER-DEV-2024.pdf'
                    titleCv='Development Web'
                    LastUpdate='2024-MAR-17'
                    
                />

                <LinkCV
                    linkDocument='/documents/CV-JESUSARECHIDER-IT.pdf'
                    titleCv='Support IT'
                />

                <LinkCV 
                    linkDocument='/documents\CV - JESUS ARECHIDER - INGENIERO ELECTRICISTA.pdf'
                    titleCv='Electrical Engineer'
                />

            </ContainerPdf>
           
            
            
        </div>
    </DownloadPdf>
  )
}

export default MyInfoPdf

const DownloadPdf = styled.section`

    
`

const ContainerPdf = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
    padding: 30px 50px;

   
`
