import GalleryItem from '../GalleryItem/GalleryItem';
// must import GalleryItem, the child component of GalleryList

//the parameters are deconstructing the props for convenience
function GalleryList({ galleryList, updateItem }) {
    // console.log(galleryList);
    return (
        // this div requires code fragments
        <>
            <div id="galleryBox">
                {/* .map is like a 'for-of' loop for the array of objects*/}
                {galleryList.map(photo =>
                (<GalleryItem
                    key={photo.id}
                    photo={photo}
                    updateItem={updateItem}
                />) //GalleryItem passes props to the component
                )}
            </div>
        </>
    )
}

export default GalleryList; // so it can get imported to App