import React from 'react';
import Post from '../Post/Post';
import service from '../../hooks/service';
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const { data, isLoading } = service(`${process.env.REACT_APP_API_URL}/posts`);
  const navigate = useNavigate();
  const onClick = () => navigate('/posts/new');

  return (
    <div className='posts__wrapper'>
      <div className='wrapper'>
        <button className='create-btn' type='button' onClick={onClick}>Создать пост</button>
      </div>
      {isLoading
        ? <span className='loader'></span>
        : data && data.length
        ? data.map((post) => <Post key={post.id} post={post}></Post>)
        : <p>Записи отсутствуют</p>
      }
    </div>
  );
};

export default HomePage;
