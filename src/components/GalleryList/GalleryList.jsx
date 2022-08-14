import GalleryItems from '../GalleryItems/GalleryItems';
import axios from 'axios';




function GalleryList({ items, getList }) {
    console.log(items)


    const loveImage = (item) => {
        console.log('in love image')
        console.log(item.likes);
        let likes = item.likes;
        console.log(likes);
        likes++
        console.log(likes);

        axios({
            method: 'PUT',
            url: `/gallery/like/${item.id}`,
            data: {
                likes: likes
            }
        }).then(response => {
            console.log(response);
            getList()
        }).catch(err => {
            console.log(err);
        })
    }

    const deleteImage = (item) => {
        console.log('delete clicked')
        axios({
            method: 'DELETE',
            url: `/gallery/like/${item.id}`,
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

                        <GalleryItems key={item.id} item={item} loveImage={loveImage} deleteImage={deleteImage} />

                    ))

                }
            </div>
        </>
    )

}

export default GalleryList
