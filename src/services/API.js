import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '31952435-a6265c5ad36628f4c77481e76',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});
export const searchPosts = async (q, page = 1) => {
  const { data } = await instance.get(`?q=${q}&page=${page}`, {
    params: {
      q,
      page,
    },
  });
  return data;
};
