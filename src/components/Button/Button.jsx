import { Wrap } from '../Loader/Loader.styled';

export const Button = ({ handleLoadMore }) => {
  return (
    <Wrap>
      <button
        onClick={handleLoadMore}
        type='submit'
        className='btn'
      >
        Load more
      </button>
    </Wrap>
  );
};
