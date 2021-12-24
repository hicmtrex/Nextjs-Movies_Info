import { createContext } from 'react';

const MovieContext = createContext({
  favorites: [],
  product: {},
  products: [],
  setProducts: [],
  search: '',
  setSearch: '',
  addFavorite: (product) => {},
  removeFavorite: (product) => {},
  searchHandler: (text) => {},
  loadFavorites: (id) => {},
  saveFavorites: (id) => {},
  getProductById: (id) => {},
  getProducts: () => {},
});

export default MovieContext;
