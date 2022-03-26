import React from 'react';
import './App.css';
import '../modules/gallery.data.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';



function App() {

  const [galleryList, setGalleryList] = useState([]);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* GalleryList */}
        <GalleryList
        galleryList={galleryList}
        />

      </div>
    );
}

export default App;
