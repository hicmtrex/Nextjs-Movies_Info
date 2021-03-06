import axios from 'axios';

export const server =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://nextjs-movies-info.vercel.app';

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`${server}/api/products`);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getProductById = async (id) => {
  const { data } = await axios.get(`${server}/api/products/${id}`);
  return data;
};
