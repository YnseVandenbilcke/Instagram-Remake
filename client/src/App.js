import React from 'react';

import { Navbar } from './components'
import { Stories, Suggestions, Posts } from './containers'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app_container'>
        <div className='header_container'>
          <Stories />
          <Suggestions />
        </div>
        <Posts />
      </div>
    </div>
  );
}

export default App;

