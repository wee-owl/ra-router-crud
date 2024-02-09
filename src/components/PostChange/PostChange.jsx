import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../../assets/avatar.png';
import service from '../../hooks/service';


function PostChange() {
  const id = window.location.href.split('/').reverse()[0];
  const { data, isLoading } = service(`${process.env.REACT_APP_API_URL}/posts/${id}`);
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const handleCancel = () => navigate('/ra-router-crud');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { id: id, content };
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      if (!response.ok) throw new Error('Failed to change post');
      navigate('/ra-router-crud');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='wrapper post__change-wrapper'>
      <div className='post__change-header'>
        <p className='post__change-title'>Редактировать публикацию</p>
        <button className='close-btn' type='button' onClick={handleCancel}></button>
      </div>
      <form className='post__change-form' onSubmit={handleSubmit}>
        <div className='post__change-create'>
          <div className='post__change-block'>
            <img className='post__avatar' src={avatar} alt='Avatar' />
            <textarea className='post__change-textarea' 
              contentEditable='true' 
              placeholder={isLoading ? <span className='loader'></span> : data.post.content}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required>
            </textarea>
            <button className='smile-btn' type='button'></button>
          </div>
          <div className='post__change-control'>
            <button className='multimedia-change-btn' type='button'>Фото/видео</button>
            <button className='tag-change-btn' type='button'>Отметить друзей</button>
            <button className='emoji-change-btn' type='button'>Чувства/действия</button>
            <button className='location-change-btn' type='button'>Отметить посещение</button>
            <button className='gif-change-btn' type='button'>GIF</button>
          </div>
        </div>
        <div className='post__change-save'>
          <button className='save-btn' type='submit'>Сохранить</button>
        </div>
      </form>
    </div>
  );
};

export default PostChange;
