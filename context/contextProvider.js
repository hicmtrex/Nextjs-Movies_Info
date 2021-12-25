import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieContext from './context-app';

const ContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [search, setSearch] = useState('');
  const { user } = useUser();

  const addFavorite = (product) => {
    setFavorites([...favorites, product]);
  };

  const removeFavorite = (product) => {
    const newFavourites = favorites.filter((x) => x._id !== product._id);
    setFavorites(newFavourites);
  };

  const searchHandler = (text) => {
    setProducts(
      products.filter((i) => i.title.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `https://nextjs-movies-info.vercel.app/api/products`
      );
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (id) => {
    try {
      const { data } = await axios.get(
        `https://nextjs-movies-info.vercel.app/api/products/${id}`
      );
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storage = localStorage.getItem(`nextjs-favorites-${user?.sub}`);
    if (storage != null) setFavorites(JSON.parse(storage));
  }, [user]);

  useEffect(() => {
    localStorage.setItem(
      `nextjs-favorites-${user?.sub}`,
      JSON.stringify(favorites)
    );
  }, [favorites, user]);

  const values = {
    addFavorite,
    removeFavorite,
    searchHandler,
    favorites,
    products,
    setProducts,
    search,
    setSearch,
    getProductById,
    product,
    getProducts,
  };
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default ContextProvider;
