import axios from 'axios';
import React, { useState, useEffect } from 'react'
import GalleryList from '../GalleryList/GalleryList';
import './App.css';




function App() {

  const [galleryItems, setGalleryItems] = useState([])

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    console.log('in get items')
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      setGalleryItems(response.data)
      console.log(galleryItems)
      console.log(response.data)
    }).catch((err) => {
      alert('error getting gallery');
      console.log(err);
    })
  }

  return (

    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList items={galleryItems} />
    </div>

  );
}

export default App;
