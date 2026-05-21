import React from 'react'
import styled from 'styled-components'

const ArticlePost = ({ title, author, content, fecha, reference, tags }) => {
    return (
        <NewPost>
            <div className='header__cabezera'>
                <div className='image__profile'>
                    <img src="/images/profile2.jpg" alt={author} />
                </div>
                <div className='autor__content'>
                    <div className='title__author'>
                        <h3>{author}</h3>
                        <span className='date'>{fecha}</span>
                    </div>
                    <ul className='list__tags'>
                        {tags && tags.map(tag => (
                            <li key={tag} className='tag__chip'>{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="body__post">
                <h2>{title}</h2>
                <p>{content}</p>
                {reference && (
                    <a href={reference} target="_blank" rel="noopener noreferrer" className='read__more'>
                        <span>Read Source</span>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                )}
            </div>
        </NewPost>
    )
}

export default ArticlePost

const NewPost = styled.article`
  display: flex;
  flex-direction: column;
  background: rgba(30, 30, 35, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 24px;
  gap: 20px;
  width: 100%;
  max-width: 100%;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 51, 187, 0.35);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 51, 187, 0.06);
  }

  .header__cabezera {
    display: flex;
    align-items: center;
    gap: 14px;

    .image__profile {
      width: 46px;
      height: 46px;
      flex-shrink: 0;

      img {
        border-radius: 50%;
        border: 2px solid rgba(255, 51, 187, 0.2);
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .autor__content {
      display: flex;
      flex-direction: column;
      gap: 6px;
      overflow: hidden;

      .title__author {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;

        h3 {
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        .date {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
        }
      }

      .list__tags {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        list-style: none;
        padding: 0;
        margin: 0;

        .tag__chip {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.7);
          padding: 2px 8px;
          border-radius: 100px;
          font-size: 10px;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.03);
          transition: all 0.3s ease;
        }
      }
    }
  }

  .body__post {
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-grow: 1;

    h2 {
      font-size: 19px;
      font-weight: 600;
      line-height: 1.4;
      color: #ffffff;
      margin: 0;
      transition: color 0.3s ease;
    }

    p {
      font-size: 14.5px;
      line-height: 1.6;
      color: #b0b0b5;
      margin: 0;
      flex-grow: 1;
    }

    .read__more {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: rgb(255, 51, 187);
      text-decoration: none;
      font-size: 13.5px;
      font-weight: 600;
      margin-top: 8px;
      transition: all 0.3s ease;
      align-self: flex-start;

      i {
        font-size: 11px;
        transition: transform 0.3s ease;
      }

      &:hover {
        color: rgb(255, 110, 210);

        i {
          transform: translate(2px, -2px);
        }
      }
    }
  }

  &:hover .body__post h2 {
    color: rgb(255, 51, 187);
  }

  &:hover .autor__content .list__tags .tag__chip {
    background: rgba(255, 51, 187, 0.04);
    border-color: rgba(255, 51, 187, 0.15);
    color: rgb(255, 110, 210);
  }

  @media (min-width: 768px) {
    padding: 28px;
    
    .header__cabezera {
      .image__profile {
        width: 50px;
        height: 50px;
      }
      .autor__content {
        .title__author {
          h3 {
            font-size: 16px;
          }
        }
      }
    }
    
    .body__post {
      h2 {
        font-size: 21px;
      }
    }
  }
`