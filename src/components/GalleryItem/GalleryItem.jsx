import React, { useState } from 'react';


function GalleryItem({ photo }) {
    // console.log(photo);
    const [likes, setLikes] = useState(0);
// console.log(likes);
    return (
        <>
            <div>
                <img className="photos" src={photo.path} />
                <div>
                    <button onClick={(event) => setLikes(likes +1)}>WAOW SUCH LIKE</button> <p>{likes}</p>
                </div>
            </div>
        </>
    )
}




export default GalleryItem;