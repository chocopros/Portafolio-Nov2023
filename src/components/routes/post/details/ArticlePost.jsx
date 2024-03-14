import React from 'react'
import styled from 'styled-components'


const ArticlePost = ({ title, author, content, fecha, reference, tags }) => {
    return (

        <NewPost>

            <div className='header__cabezera'>
                <div className='image__profile'>
                    <img src="images/profile2.jpg" alt="" />
                </div>
                <div className='autor__content'>
                    <div className='title__author'>
                        <h3>{author}</h3>
                        <span>{fecha}</span>
                    </div>
                    <ul className='list__tags'>
                        {
                            tags.map(tag => (
                                <li key={tag}>{tag}</li>
                            ))
                        }
                    </ul>
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
    max-height: 410px;
    width: 630px;
    border: solid #e3e3e351 1px;
    border-radius: 10px;
    padding: 33px;
    gap: 20px 0;
    background-color: #00000035;
    transition: all 300ms ease;

    &:hover {
        transform: scale(1.03);
        
    }
    

    .header__cabezera {
        display: flex;
        align-items: center;
        gap: 0 15px;

        .image__profile{
            width: 100px;
            height: 100px;
            
            img {
                border-radius: 50%;
                border: solid #ffffff18 0.5px;
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

        .list__tags{
            display: flex;
            flex-wrap: wrap;
            gap: 0 20px;
            font-size: 12px;
            color: #ffffff90;

            list-style: none;
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
            max-height: 55px;
            
        }

        p{
            font-size: 14px;
            overflow: auto;
            text-overflow: ellipsis;
            height: 115px;
        }

    }


    
`