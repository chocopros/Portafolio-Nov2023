import React from 'react'
import styled from 'styled-components'
import listPost from '../../../json/post/post.json'
import ArticlePost from './details/ArticlePost'


const Post = () => {
    return (
        <MainContainer>
            <SectionHero>
                <h2 className='title__principal'>Notes</h2>
                <div className='post__container'>
                    {
                        listPost.map(post => (
                            <ArticlePost
                            key={post.id}
                                title={post?.titulo}
                                content={post?.contenido}
                                author={post?.autor}
                                fecha={post?.fecha}
                                reference={post?.referencia}
                                tags = {post?.etiquetas}
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

  .title__principal{
    font-size: 35px;
    margin-left: 30px ;
  }

  .post__container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px 0;
    padding: 50px 30px;
  }
`