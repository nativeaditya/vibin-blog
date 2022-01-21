
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import PostPage from './pages/PostPage/PostPage';

function App() {
  return (
    <div className='container'>
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/blog' exact element={<Blog/>} />
      <Route  path='/blog/:id' exact element={<PostPage/>} />
      
    </Routes>
  </div>
  );
}

export default App;
