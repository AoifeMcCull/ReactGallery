import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({imageList, updateLikes}) {
    return (
        <section className="GalleryList">
            {imageList.map((Image) => {
                return(
                    <GalleryItem image = {Image} key={Image.id} updateLikes = {updateLikes} />
                )
            })}
        </section>
    )
}

export default GalleryList;