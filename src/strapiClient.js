// testing strapi headless cms
import axios from 'axios';

const API_URL = 'http://localhost:1337';

export const fetchContent = async (endpoint) => {
  const response = await axios.get(`${API_URL}/${endpoint}`);
  return response.data;
};
