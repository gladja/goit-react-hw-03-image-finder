export const ImageGalleryItem = ({description, prev }) => {
  return (
        <li  className='gallery-item'>
          <img className='image' src={prev} alt={description} />
        </li>
  );
};
