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
        // console.log('Entire response:', response);
        // The actual array comes from the data attribute on the response
        // console.log('Just the data:', response.data);

        // Set data into component state
        setGalleryList(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }

  const updateItem = (galleryItem) => {
    axios.put(`/gallery/like/${galleryItem.id}`)
      .then((response) => {
        fetchGalleryList();
        console.log('Updated:', galleryItem.likes, galleryItem.path);
      })
      .catch(function (error) {
        console.log('Error in PUT:', error);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My photos: love 'em, click 'em, stick 'em in a stew</h1>
      </header>
      <GalleryList
        galleryList={galleryList}
        updateItem={updateItem}
      />
    </div>
  );
}

export default App;
