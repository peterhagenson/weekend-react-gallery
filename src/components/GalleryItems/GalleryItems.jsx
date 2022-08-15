import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUp from '@mui/icons-material/ThumbUp';
//import mr from '@mui/system';





function GalleryItems({ item, loveImage, deleteImage }) {

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
                        <p>{item.likes} people love this!</p>
                        <Button sx={{ mr: 1 }} startIcon={<ThumbUp />} variant="contained" size="small" onClick={() => loveImage(item)}>Love It!</Button>
                        <Button startIcon={<DeleteIcon />} variant="contained" size="small" className="deleteBtn" onClick={() => deleteImage(item)}>Delete</Button>
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
                        <p>{item.likes} people love this!</p>
                        <Button variant="contained" size="small" onClick={() => loveImage(item)}>Love It!</Button>
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