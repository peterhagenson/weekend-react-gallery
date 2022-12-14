import { useState } from 'react';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';





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
        setPath('');
        setDescription('');
        addItem(newItem);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Destination</h2>
            <TextField sx={{ mr: 1 }} size="small" variant="standard" onChange={(event) => setPath(event.target.value)} placeholder="image url" value={path}></TextField>
            <TextField sx={{ mr: 1 }} size="small" variant="standard" onChange={(event) => setDescription(event.target.value)} placeholder="image description" value={description}></TextField>
            <Button startIcon={<Add />} variant="contained" size="medium" onClick={handleSubmit}>Add</Button>
        </form>
    )
}

export default GalleryForm;