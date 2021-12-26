import { useUser } from '@auth0/nextjs-auth0';
import React, { useEffect, useState } from 'react';
import MovieContext from './context-app';

const ContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);
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
  };
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default ContextProvider;
