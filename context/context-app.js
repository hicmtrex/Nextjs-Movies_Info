import { createContext } from 'react';

const MovieContext = createContext({
  favorites: [],
  products: [],
  setProducts: [],
  search: '',
  setSearch: '',
  addFavorite: (product) => {},
  removeFavorite: (product) => {},
  searchHandler: (text) => {},
  loadFavorites: (id) => {},
  saveFavorites: (id) => {},
});

export default MovieContext;
