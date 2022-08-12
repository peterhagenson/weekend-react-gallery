import GalleryItems from '../GalleryItems/GalleryItems';


function GalleryList({ items }) {
    console.log(items)
    return (
        <>
            {
                items.map((item) => (
                    <GalleryItems key={item.id} item={item} />
                ))

            }
        </>
    )

}

export default GalleryList
