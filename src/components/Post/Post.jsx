import React from 'react';
import { useNavigate } from 'react-router-dom';
import getDate from '../../lib/convertDate';
import avatar from '../../assets/avatar.png';


function Post({ post }) {
  const navigate = useNavigate();
  const onClick = () => navigate(`/posts/${post.id}`);
  console.log(getDate(post.created));

  return (
    <div className='wrapper post__wrapper' id={post.id} onClick={onClick}>
      <div className='post__header'>
        <img className='post__avatar' src={avatar} alt='Avatar' />
        <div>
          <p className='post__author-name'>Ivan Ivanov</p>
          <p className='post__author-wrapper'>
            <span className='post__author-rank'>Основатель группы</span>
            <time className='post__author-time' 
                  dateTime={getDate(post.created).dateTime}>
                  {getDate(post.created).date}
            </time>
          </p>
        </div>
      </div>
      <div className='post__body'>
        <p className='post__content'>{post.content}</p>
        <div className='post__btn-wrapper'>
          <button className='like-btn' type='button'>Нравится</button>
          <button className='comment-btn' type='button'>Комментировать</button>
        </div>
      </div>
      <div className='post__create'>
        <div className='post__create-wrapper'>
          <img className='post__avatar' src={avatar} alt='Avatar' />
          <div className='post__control'>
            <form className='post__form' action='#0' method='post' name='form'>
              <div className='post__form-textarea' contentEditable='true' aria-placeholder='Введите текст'></div>
            </form>
            <button className='smile-btn' type='button'></button>
            <button className='photo-btn' type='button'></button>
            <button className='gif-btn' type='button'></button>
            <button className='emoji-btn' type='button'></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
