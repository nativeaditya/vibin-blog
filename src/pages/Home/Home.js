
import React from 'react';
import './main.css';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <main  >
    <div className='homeContainer'>
    <h1>Home Page</h1>
    <Link to='/blog'>
    <button >go to blog page</button>
    </Link>
    </div>
    </main>
  );
}

export default Home;
