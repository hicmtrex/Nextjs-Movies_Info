import axios from 'axios';

const dev =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:3000'
    : 'https://yourwebsite.com';

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`${dev}/api/products`);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getProductById = async (id) => {
  const { data } = await axios.get(`${dev}/api/products/${id}`);
  return data;
};
