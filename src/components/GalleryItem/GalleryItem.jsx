import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';


function GalleryItem({ photo, updateItem }) {
    // console.log(photo);

    const handleLike = () => {
        updateItem(photo);
    }

    let [showPhoto, setShowPhoto] = useState(true);

    const handleShowHide = () => {
        setShowPhoto(!showPhoto);
        console.log(showPhoto);
    }

    return (
        <>
            <div>
                <div onClick={handleShowHide}>
                    {showPhoto ? <img key={photo.id} className="photos" src={photo.path} />
                        : <p className="caption" >{photo.description}</p>}
                </div>
                <div>
                    {/* <button onClick={handleLike}>🐕 WAOW SUCH LIKE 🐕</button> <p>{photo.likes}</p> */}
                    <FavoriteIcon onClick={handleLike}/> <p>{photo.likes}</p>
                </div>
            </div>
        </>
    )
}




export default GalleryItem;