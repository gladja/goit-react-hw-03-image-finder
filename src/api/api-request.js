import axios from 'axios';
// import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38551028-7f205e86e4b61da8a00434006';

export const getSearchImage = async (query, page) => {
  const { data } = await axios({
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      page: page,
      per_page: 12,
    }
  })
    return data
}
