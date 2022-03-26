function GalleryItem({ photo }) {
    console.log(photo);
    return (
    <>
       <img src={photo.path}/>
    </>  
    )}




export default GalleryItem;