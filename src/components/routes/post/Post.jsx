import React from 'react'
import styled from 'styled-components'
import listPost from '../../../json/post/post.json'
import ArticlePost from './details/ArticlePost'


const Post = () => {
    return (
        <MainContainer>
            <SectionHero>
                <h2>Notes</h2>
                <div className='post__container'>
                    {
                        listPost.map(post => (
                            <ArticlePost
                                title={post?.titulo}
                                content={post?.contenido}
                                author={post?.autor}
                                fecha={post?.fecha}
                            />
                        ))
                    }
                </div>

            </SectionHero>
        </MainContainer>
    )
}

export default Post

const MainContainer = styled.main`

  background-color: rgb(32, 32, 35);
`;

const SectionHero = styled.section`
  
  min-height: 100vh;
  
  color: white;
  max-width: 1024px;
  margin: 0 auto;

  .post__container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px 0;
  }
`