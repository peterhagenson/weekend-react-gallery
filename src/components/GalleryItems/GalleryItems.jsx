import React, { useState } from 'react'


function GalleryItems({ item, loveImage }) {

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        console.log('in handle click')
        if (isClicked === false) {
            setIsClicked(true);
        } else {
            setIsClicked(false);
        }
    }

    console.log(item.description);

    if (isClicked === false) {
        return (
            <>
                <div className="itemContainer">
                    <div onClick={handleClick}>
                        <img src={item.path} className="img" />
                    </div>
                    <div>
                        <button onClick={() => loveImage(item)}>Love It!</button>
                        <p>{item.likes} people love this!</p>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="itemContainer">
                    <div className="descriptionContainer" onClick={handleClick}>
                        {item.description}
                    </div>
                    <div>
                        <button onClick={() => loveImage(item)}>Love It!</button>
                        <p>{item.likes} people love this!</p>
                    </div>
                </div>
            </>
        );
    }

}

export default GalleryItems

    // <>
    // <div key={item.id} item={item}>
    //     <img src={item.source} />
    // </div>
    //     </>