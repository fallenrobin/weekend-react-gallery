import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList({ galleryList, updateItem }) {
    // console.log(galleryList);
    return (
        <>
            <div id="galleryBox">
                {galleryList.map(photo =>
                (<GalleryItem
                    key={photo.id}
                    photo={photo}
                    updateItem={updateItem}
                />)
                )}
            </div>
        </>
    )
}

export default GalleryList; 