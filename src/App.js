import React from 'react';
import Homepage from '/Users/raagavan/projetnetflix-1/src/Components /Homepage.js';
import Header from '/Users/raagavan/projetnetflix-1/src/Components /Header.js';
import {Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Header/><Homepage/></>} />
        
      </Routes>
    </div>
  );
}

export default App;
