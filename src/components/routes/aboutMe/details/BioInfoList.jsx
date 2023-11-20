import React from 'react'
import styled from 'styled-components';

const BioInfoList = () => {
    return (
        <BioList>
            <h2><i className="fa-solid fa-timeline"></i> Bio</h2>
            <ul className='list__bio'>
                <li><span>1993</span> Born in Barcelona, Venezuela.</li>
                <li><span>2013</span> Completed the computer technician in Anzoategui, Venezuela.</li>
                <li><span>2019</span> Completed electrical engineering studies with the best low voltage distribution system.</li>
                <li><span>2023</span> Completed Full Stack Web Development and Computer Science.</li>
            </ul>
        </BioList>
    )
}

export default BioInfoList;

const BioList = styled.div`
    
    padding: 20px 50px;

    h2 {
      font-size: 35px;
    }

    .list__bio {
    margin-top: 20px;
    list-style: none;
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    li {
      display: flex;
      align-items: center;
      
      gap: 20px;
    }

    span{
      font-weight: 700;
    }
  }


`