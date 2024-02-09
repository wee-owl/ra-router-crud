import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import avatar from '../../assets/avatar.png';
import getDate from '../../lib/convertDate';
import service from '../../hooks/service';


function PostView() {
  const { id } = useParams();
  const { data, isLoading } = service(`${process.env.REACT_APP_API_URL}/posts/${id}`);
  const navigate = useNavigate();
  const onChangePost = () => navigate(`/posts/change/${id}`);
  const onDeletePost = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete post');
      navigate('/ra-router-crud');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {isLoading
        ? <span className='loader'></span>
        : <div className='wrapper post__wrapper' id={data.post.id}>
          <div className='post__header'>
            <img className='post__avatar' src={avatar} alt='Avatar' />
          <div>
            <p className='post__author-name'>Ivan Ivanov</p>
            <p className='post__author-wrapper'>
              <span className='post__author-rank'>Основатель группы</span>
              <time className='post__author-time' 
                    dateTime={getDate(data.post.created).dateTime}>
                    {getDate(data.post.created).date}
              </time>
            </p>
          </div>
          </div>
          <div className='post__body'>
            <p className='post__content'>{data.post.content}</p>
            <div className='post__btn-wrapper'>
              <button className='like-btn' type='button'>Нравится</button>
              <button className='comment-btn' type='button'>Комментировать</button>
            </div>
          </div>
          <div className='post__change'>
            <button className='change-btn' type='button' onClick={onChangePost}>Изменить</button>
            <button className='delete-btn' type='button' onClick={onDeletePost}>Удалить</button>
          </div>
        </div>
      }
    </>

  );
};

export default PostView;
