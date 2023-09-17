import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ hits }) => {
  return (
    <ul className='gallery'>
      {hits &&
        hits.map((itm) => (
          <div key={itm.id}>
            <ImageGalleryItem
              description={itm.tags}
              prev={itm.webformatURL}
            />
          </div>
        ))
      }
    </ul>
  );
};
