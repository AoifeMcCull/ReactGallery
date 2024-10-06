import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './GalleryList.css';

function GalleryList() {
    console.log('in GalleryList!')
    let [imageList, setImageList] = useState([]);


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


    return (
        <section className="GalleryList">
            {imageList.map((Image) => {
                return(
                    <img key={Image.id} src={Image.url} />
                )
            })}
        </section>
    )
}

export default GalleryList;