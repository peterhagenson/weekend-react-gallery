

function GalleryItems({ item }) {
    console.log(item.description);
    return (
        <div>
            <img src={item.path} />
            {item.description}

        </div>
    );

}

export default GalleryItems

    // <>
    // <div key={item.id} item={item}>
    //     <img src={item.source} />
    // </div>
    //     </>