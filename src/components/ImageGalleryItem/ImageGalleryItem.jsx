import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({ description, prev, name, onClickImage }) => {
  return (
    <>
      <li onClick={onClickImage} className='gallery-item'>
        <img className='image' src={prev} alt={description} name={name}/>
      </li>
    </>
  );
};
