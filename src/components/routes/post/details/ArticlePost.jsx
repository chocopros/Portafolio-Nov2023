import React from 'react'
import styled from 'styled-components'


const ArticlePost = ( {title,author,content,fecha} ) => {
    return (
        
        <NewPost>
            <div className='header__cabezera'>
                <div>fotito</div>
                <div>@{author}</div>
                <div>{fecha}</div>
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

    }
    
`