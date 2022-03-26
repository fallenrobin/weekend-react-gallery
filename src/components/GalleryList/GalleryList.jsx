import StudentItem from '../StudentItem/StudentItem';


function GalleryList({ galleryList }) {
    console.log(GalleryList);
    return (
        <>
            {galleryList.map(photo =>
            (<StudentItem
                key={photo.id}
                photo={photo}
            />)
            )}
        </>
    );
}





export default GalleryList 