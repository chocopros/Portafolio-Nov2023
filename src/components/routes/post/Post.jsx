import React from 'react'
import styled from 'styled-components'
import listPost from '../../../json/post/post.json'
import ArticlePost from './details/ArticlePost'

const Post = () => {
    return (
        <MainContainer>
            <SectionHero>
                <div className="posts__header">
                    <h2>Technical Notes</h2>
                    <p>Insights, guides, and articles covering state-of-the-art artificial intelligence, DevOps containerization, modern web architectures, and engineering best practices.</p>
                </div>
                <div className='post__container'>
                    {listPost && listPost.map(post => (
                        <ArticlePost
                            key={post?.id}
                            title={post?.titulo}
                            content={post?.contenido}
                            author={post?.autor}
                            fecha={post?.fecha}
                            reference={post?.referencia}
                            tags={post?.etiquetas}
                        />
                    ))}
                </div>
            </SectionHero>
        </MainContainer>
    )
}

export default Post

const MainContainer = styled.main`
  background-color: rgb(32, 32, 35);
  padding-top: 100px; /* Accounts for fixed navbar spacing */
`;

const SectionHero = styled.section`
  min-height: 100vh;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 15px 80px 15px;

  .posts__header {
    text-align: center;
    max-width: 750px;
    margin: 0 auto 50px auto;
    display: flex;
    flex-direction: column;
    gap: 16px;

    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #ffffff;
      margin: 0;
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        display: block;
        width: 60px;
        height: 4px;
        background: rgb(255, 51, 187);
        margin: 12px auto 0 auto;
        border-radius: 2px;
      }
    }

    p {
      font-size: 15px;
      color: #b0b0b5;
      line-height: 1.6;
      margin: 0;
    }
  }

  .post__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 30px;
    justify-content: center;
    align-items: stretch;
    width: 100%;
  }

  @media(min-width: 768px) {
    padding: 60px 30px 100px 30px;
    
    .posts__header {
      h2 {
        font-size: 40px;
      }
      p {
        font-size: 17px;
      }
    }

    .post__container {
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 35px;
    }
  }
`