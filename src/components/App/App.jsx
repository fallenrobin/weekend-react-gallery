import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';



function App() {

  const [galleryList, setGalleryList] = useState([]);

  // Call function so it runs once on page load
  // Similar to jQuery's document ready
  useEffect(() => {
    fetchGalleryList();
  }, [])

  const fetchGalleryList = () => {


    axios.get('/gallery')
      .then((response) => {
        console.log('Entire response:', response);
        // The actual array comes from the data attribute on the response
        console.log('Just the data:', response.data);

        // Set data into component state
        setGalleryList(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList
          galleryList={galleryList}
        />
      </div>
    );
  }

  export default App;
