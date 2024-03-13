import React from 'react'
import styled from 'styled-components'


const ArticlePost = ( {title,author,content,fecha} ) => {
    return (
        
        <NewPost>
            <div className='header__cabezera'>
                <div className='image__profile'>
                    <img src="images/profile2.jpg" alt="" />
                </div>
                <div className='title__author'>
                    <h3>{author}</h3>
                    <div>{fecha}</div>
                </div>
                
            </div>
            <div className="body__post">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </NewPost>
    )
}

export default ArticlePost

const NewPost = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 630px;
    border: solid white 1px;
    border-radius: 10px;

    .header__cabezera {
        display: flex;
        align-items: center;


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

    }
    
`