import React from 'react'
import styled from 'styled-components'

const AboutMeinfo = () => {
    return (
        <Aboutinfo>
            <h2><i className="fa-solid fa-person"></i> About Me</h2>
            <p>
                Passionate about technology and computer advances, versatile in any technology, from electricity, electronics, graphic design, web programming, technical support, machine learning, learning something new every day. Thanks to my own confidence, I can add a lot of value by developing anywhere.
                My goal is to continue learning with technology, learn a little more every day and look for a workplace where I can be a part.
            </p>
        </Aboutinfo>
    )
}

export default AboutMeinfo

const Aboutinfo = styled.div`
    
    margin-top: 20px;
    padding: 20px 50px;

    h2 {
      font-size: 35px;
    }
    p {
      margin-top: 15px;
      text-align: justify;
    }


`

