import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ hits, onClickImage }) => {
  return (
    <Gallery>
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
    </Gallery>
  );
};
