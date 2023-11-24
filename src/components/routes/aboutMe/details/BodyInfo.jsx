import React from 'react'
import styled from 'styled-components'

const BodyInfo = () => {
    return (
        <BoddyInfo>

            <div className='btn__follow'>
                <button>Follow <i className="fa-brands fa-twitter"></i>  </button>
            </div>
            <h2>Jesus Arechider <i className="fa-solid fa-screwdriver-wrench fa-spin-pulse"></i></h2>
            <h3>Brings ideas to life with code! ✨</h3>
            <p className='des__job'>Development Web. Creative content Creator.
                Electrical Engineering. IT Support. Marching Learning in process.
            </p>
            <ul className='details__info'>
                <li> <i className="fa-solid fa-briefcase fa-bounce" style={{ color: 'green' }}></i> Avalible</li>
                <li> <i className="fa-solid fa-link" style={{ color: '#e619c3' }}></i>/works</li>
                <li> <i className="fa-solid fa-cake-candles"></i> Dicember 1st, 1993</li>
                <li> <i className="fa-solid fa-calendar-days"></i> Last Update Nov 2023</li>
            </ul>
            
        </BoddyInfo>
    )
}

export default BodyInfo

const BoddyInfo = styled.div`
    
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    gap: 10px;
    margin-top: 20px;

    .btn__follow {
      display: flex;
      justify-content: end;
      align-items: center;
      margin: 25px 0;
      

      button {
        color: white;
        border-style: none;
        padding: 15px 35px;
        border-radius: 30px;
        background-color: rgb(255 51 187);
        margin-right: 100px;
        font-size: 16px;
        font-weight: 700;
        transition: all 1s ease ;
      }

      i:hover{
        font-size: 25px;
      }

      button:hover{
        background-color: #0084b4;
      }
    }

    h2 {
      font-size: 50px;
    }

    h3 {
      font-size: 20px;
      color: #d1d0d0;
    }

    .des__job{
      max-width: 70%;
    }

    .details__info{
      display: flex;
      gap: 50px;
      list-style: none;
    }
  


`