import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';



function App() {
  // 'variable' 
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
        // The actual array comes from the data in the response
        // console.log('Just the data:', response.data);

        // Save data in the 'variable,' aka useState
        setGalleryList(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }

  // The PUT route on the server side increments the clicked 'likes'
  const updateItem = (galleryItem) => {
    axios.put(`/gallery/like/${galleryItem.id}`)
      .then((response) => {
        fetchGalleryList(); //gets updated amount of likes
        console.log('Updated:', galleryItem.likes, galleryItem.path);
      })
      .catch(function (error) {
        console.log('Error in PUT:', error);
      });
  }

  return (//Header could be a component but seems like overkill here
    <div className="App"> 
      <header className="App-header"> 
        <h1 className="App-title">My photos: like 'em, click 'em, stick 'em in a stew</h1>
      </header>
      {/* GalleryList passes these props to the component */}
      <GalleryList
        galleryList={galleryList}
        updateItem={updateItem}
      />
    </div>
  );
}

export default App;
