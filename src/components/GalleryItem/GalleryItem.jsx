import React, { useState, useEffect } from 'react';


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
            <div onClick={handleShowHide}>
                {showPhoto ? <img key={photo.id} className="photos" src={photo.path} /> : <p className= "photos" >{photo.description}</p> }
            </div>

                <button onClick={handleLike}>🐕 WAOW SUCH LIKE 🐕</button> <p>{photo.likes}</p>
       
        </>
    )
}




export default GalleryItem;