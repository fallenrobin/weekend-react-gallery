import React, { useState } from 'react';


function GalleryItem({ photo, updateItem }) {
    // console.log(photo);
    
    const handleLike = () => {
        updateItem(photo);
    }
// console.log(likes);
    return (
        <>
            <div>
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