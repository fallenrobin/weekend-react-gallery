import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
// I have no idea why but I was unable to use a normal heart emoji vs MUI... see, it looks weird: ❤️!

// deconstructing props; the key word 'photo' is taco, but helpful
function GalleryItem({ photo, updateItem }) {
    // console.log(photo);

    // function that triggers PUT; could probably be ok inline too
    const handleLike = () => {
        updateItem(photo);
    }

    // To store current boolean of clicked photo/caption which is evaluated for rendering
    let [showPhoto, setShowPhoto] = useState(true);

    // Function to invert boolean value
    const handleShowHide = () => {
        setShowPhoto(!showPhoto);
        console.log(showPhoto);
    }

    //    Click listener for photo 'flip' is on the div and NOT the image, 
    //    since the image is not always rendered through the conditional (ie, no way to flip back)
    return (
        <>
            <div className="picPlusLikes">
                <div className="picAndCaption" onClick={handleShowHide}>
                    {showPhoto ? <div className="color"><img key={photo.id} className="photos" src={photo.path} /></div>
                        : <div className="caption"><p >{photo.description}</p></div>}
                </div>
                <div className='likeButtons'>
                    {/* old button: <button onClick={handleLike}>🐕 WAOW SUCH LIKE 🐕</button> <p>{photo.likes}</p> */}
                    {/* I discovered it was important to wrap many layers around the gallery item pieces for styling,
                    like for the heart icon-'button' and photo.likes */}
                    <p className="likeCount"><span><FavoriteIcon className="heart" onClick={handleLike} /></span>  {photo.likes}</p></div>

            </div>
        </>
    )
}




export default GalleryItem; //for GalleryList, the parent