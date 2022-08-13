import { useState } from 'react';


function GalleryForm({ addItem }) {
    console.log('testing gallery form')

    const [path, setPath] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let newItem = {
            path: path,
            description: description
        }
        addItem(newItem);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Image</h2>
            <input onChange={(event) => setPath(event.target.value)} placeholder="image url" value={path}></input>
            <input onChange={(event) => setDescription(event.target.value)} placeholder="image description" value={description}></input>
            <button onClick={handleSubmit}>Add</button>
        </form>
    )
}

export default GalleryForm;