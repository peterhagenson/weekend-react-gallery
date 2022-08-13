import GalleryItems from '../GalleryItems/GalleryItems';
import axios from 'axios';




function GalleryList({ items, getList }) {
    console.log(items)


    const loveImage = (item) => {
        console.log('in love image')
        axios({
            method: 'PUT',
            url: `/gallery/like/${item.id}`
        }).then(response => {
            console.log(response);
            getList()
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <div className="galleryItemsContainer">
                {

                    items.map((item) => (

                        <GalleryItems key={item.id} item={item} loveImage={loveImage} />

                    ))

                }
            </div>
        </>
    )

}

export default GalleryList
