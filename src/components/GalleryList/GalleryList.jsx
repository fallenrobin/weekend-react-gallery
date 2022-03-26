import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList({ galleryList }) {
    console.log(galleryList);
    return (
        <>
            {galleryList.map(photo =>
            (<GalleryItem
                key={photo.id}
                photo={photo}
            />)
            )}
        </>
    )
}

export default GalleryList; 