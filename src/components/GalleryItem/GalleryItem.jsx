import React, { useState, useEffect } from 'react';


function GalleryItem({ photo, updateItem }) {
    // console.log(photo);

    const handleLike = () => {
        updateItem(photo);
    }

    const [showPhoto, setShowPhoto] = useState(false);

    const handleFlip = () => {
        console.log('clicked the photo');
        // setShowPhoto = true;
    }


    // console.log(likes);
    return (
        <>
            <div onClick={handleFlip}>
                <img
                    key={photo.id}
                    className="photos" src={photo.path} />
                <div>
                    <button onClick={handleLike}>🐕 WAOW SUCH LIKE 🐕</button> <p>{photo.likes}</p>
                </div>
            </div>
        </>
    )
}




export default GalleryItem;