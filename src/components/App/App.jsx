import GalleryList from "../GalleryList/GalleryList";
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App() {
  const [imageList, setImageList] = useState([]);
  const fetchGallery = () => {
    
    console.log('fetching gallery!')
    axios.get('/api/gallery')
    .then((response) => {
        console.log('got:', response.data);
        setImageList(response.data);
    })
    .catch((err) => {
        console.error('error fetching gallery!', err)
    })
  }
  
  useEffect(() => {
    fetchGallery();
  }, [])
  
  const updateLikes = (id) => {
    setImageList(prevList =>
        prevList.map(image =>
            image.id === id ? { ...image, likes: image.likes + 1 } : image
        )
    );
};
  

    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <GalleryList imageList = {imageList} updateLikes={updateLikes}/>
        
      </div>
    );
}

export default App;
