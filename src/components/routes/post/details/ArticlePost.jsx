import React from 'react'
import styled from 'styled-components'


const ArticlePost = ({ title, author, content, fecha, reference }) => {
    return (

        <NewPost>

            <div className='header__cabezera'>
                <div className='image__profile'>
                    <img src="images/profile2.jpg" alt="" />
                </div>
                <div className='title__author'>
                    <h3>{author}</h3>
                    <span>{fecha}</span>
                </div>
            </div>

            <div className="body__post">
                <h2>{title}</h2>
                <p>{content}</p>
                <a href={reference}>Go to...</a>
            </div>

        </NewPost>
    )
}

export default ArticlePost

const NewPost = styled.article`
    display: flex;
    flex-direction: column;
    max-height: 385px;
    width: 630px;
    border: solid #e3e3e351 1px;
    border-radius: 10px;
    padding: 33px;
    gap: 20px 0;

    .header__cabezera {
        display: flex;
        align-items: center;
        gap: 0 15px;

        .image__profile{
            width: 80px;
            height: 80px;

            img {
                border-radius: 50%;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .title__author{
            display: flex;
            flex-wrap: wrap;
            gap: 0 20px;
            align-items: center;

            h3{
                font-size: 33px;
                
            }

            span{
                color: #ffffff56;
            }
        }
    }
    
    .body__post{
        display: flex;
        flex-direction: column;
        gap: 20px 0;
        margin-bottom: 20px;

        h2{
            font-size: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            max-height: 64px;
        }

        p{
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 115px;
        }

    }


    
`