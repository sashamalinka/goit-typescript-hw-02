import axios from 'axios';

const API_KEY = 'tFddwf0zt5zh-ZqonFXp6bP1B9IMgtJAyTMAfUHJzxg';
axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  per_page: 20,
  orientation: 'landscape',
};

export const getPhotos = async (query, page) => {
  const response = await axios.get(
    `/search/photos?query=${query}&page=${page}`,
  );
  return response.data;
};
