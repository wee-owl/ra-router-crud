import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../../assets/avatar.png';


function PostNew() {
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const handleCancel = () => navigate('/');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { id: 0, content: content };
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) throw new Error('Failed to create post');
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='wrapper post__new'>
      <div className='post__new-control'>
        <button className='public-btn' type='button'>Публикация</button>
        <button className='multimedia-btn' type='button'>Фото/видео</button>
        <button className='live-btn' type='button'>Прямой эфир</button>
        <button className='more-btn' type='button'>Ещё</button>
        <button className='close-btn' type='button' onClick={handleCancel}></button>
      </div>
      <form className='post__new-form' onSubmit={handleSubmit}>
        <div className='post__new-create'>
          <img className='post__avatar' src={avatar} alt='Avatar' />
          <textarea className='post__new-textarea' 
            contentEditable='true' 
            placeholder ='Введите текст'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required>
          </textarea>
          <button className='smile-btn' type='button'></button>
        </div>
        <div className='post__new-public'>
          <button className='send-btn' type='submit'>Опубликовать</button>
        </div>
      </form>
    </div>
  );
};

export default PostNew;
