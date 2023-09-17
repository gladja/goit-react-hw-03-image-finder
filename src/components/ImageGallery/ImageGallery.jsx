import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ hits, onClickImage }) => {
  return (
    <ul className='gallery'>
      {hits &&
        hits.map((itm) => (
          <div key={itm.id}>
            <ImageGalleryItem
              description={itm.tags}
              prev={itm.webformatURL}
              name={itm.id}
              onClickImage={onClickImage}
            />
          </div>
        ))
      }
    </ul>
  );
};
