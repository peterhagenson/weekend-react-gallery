import axios from 'axios';
import React, { useState, useEffect } from 'react'
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
import './App.css';
//import { addListener } from 'nodemon';




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
      //console.log(err);
    })
  }

  const addItem = (newItem) => {
    console.log('in addItem', newItem);
    axios({
      method: 'POST',
      url: '/gallery',
      data: newItem
    }).then((response) => {
      console.log(response)
      getList();
    }).catch((err) => {
      alert('error adding item');
      console.log(err);
    })
  }


  return (

    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryForm addItem={addItem} />
      <GalleryList items={galleryItems} getList={getList} />
    </div>

  );
}

export default App;
