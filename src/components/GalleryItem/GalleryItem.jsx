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
            <div className="picPlusLikes">
                <div className="picAndCaption" onClick={handleShowHide}>
                    {showPhoto ? <div className="color"><img key={photo.id} className="photos" src={photo.path}/></div> 
                        : <div className="caption"><p >{photo.description}</p></div>}
                </div>
                <div className='likeButtons'>
                    {/* <button onClick={handleLike}>🐕 WAOW SUCH LIKE 🐕</button> <p>{photo.likes}</p> */}
                    
                        <p className="likeCount"><span><FavoriteIcon className="heart" onClick={handleLike} /></span>  {photo.likes}</p></div>
                
            </div>
        </>
    )
}




export default GalleryItem;