import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList({ galleryList }) {
    // console.log(galleryList);
    return (
        <>
            <div id="galleryBox">
                {galleryList.map(photo =>
                (<GalleryItem
                    key={photo.id}
                    photo={photo}
                />)
                )}
            </div>
        </>
    )
}

export default GalleryList; 