import { Wrap } from '../Loader/Loader.styled';
import { Btn } from './Button.styled';

export const Button = ({ handleLoadMore }) => {
  return (
    <Wrap>
      <Btn
        onClick={handleLoadMore}
        type='submit'
      >
        Load more
      </Btn>
    </Wrap>
  );
};
