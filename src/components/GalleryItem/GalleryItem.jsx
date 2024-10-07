import { user } from 'pg/lib/defaults';
import './GalleryItem.css';
import axios from 'axios';
function likeImage(image, updateLikes){
    axios.put(`/api/gallery/like/${image.id}`)
    .then(
        updateLikes(image.id) //this is the jankiest thing ever i feel like missing two days screwed me over 
    )
    .catch((err) => {
      console.log(`error liking picture ${image.id}! ${err}`)
    })
  }


function GalleryItem({image, updateLikes}) {
    const [isDesc, setIsDesc] = useState(false);
    const swapDesc = () => {
        setIsDesc(!isDesc);
    }
    return (
        <section className="GalleryItem">
            <p>{image.title}</p>
            {!isDesc ? <img src={image.url} onClick={swapDesc} /> : <p class='description' onClick={swapDesc}>{image.description}</p>}
            
            <p> {image.likes} people like this!</p>
            <button onClick = {() => likeImage(image, updateLikes)}>Like it!</button>
        </section>
    )
}

export default GalleryItem;