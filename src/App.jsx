import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostChange from './components/PostChange/PostChange';
import HomePage from './components/HomePage/HomePage';
import PostView from './components/PostView/PostView';
import PostNew from './components/PostNew/PostNew';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <main className='main'>
        <Routes>
          <Route path='/' exact Component={HomePage}/>
          <Route path='/posts/new' Component={PostNew}/>
          <Route path='/posts/:id' Component={PostView}/>
          <Route path='/posts/change/:id' Component={PostChange}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
