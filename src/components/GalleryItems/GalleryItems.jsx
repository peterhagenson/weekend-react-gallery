

function GalleryItems({ item, loveImage }) {
    console.log(item.description);
    return (
        <>
            <div className="itemContainer">
                <div className="imageDiv">
                    <img src={item.path} />
                </div>
                <div>
                    <button onClick={() => loveImage(item)}>Love It!</button>
                    <p>{item.likes} people love this!</p>
                </div>
                <div className="descriptionDiv">
                    {item.description}
                </div>
            </div>
        </>
    );

}

export default GalleryItems

    // <>
    // <div key={item.id} item={item}>
    //     <img src={item.source} />
    // </div>
    //     </>