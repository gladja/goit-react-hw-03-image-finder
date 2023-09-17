import { Img, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ description, prev, name, onClickImage }) => {
  return (
    <>
      <Item onClick={onClickImage}>
        <Img
          src={prev}
          alt={description}
          name={name}
        />
      </Item>
    </>
  );
};
