import { useUser } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import MovieContext from '../context/context-app';
import ProductsPage from './products';

const Home = () => {
  const { isLoading } = useUser();

  return (
    <>
      <Head>
        <title>Tv Show</title>
        <meta name='description' content='best movies and series in tv show' />
      </Head>
      <h1 className='text-center text-warning'>Tv Show</h1>
      {isLoading ? <Loader /> : <ProductsPage />}
    </>
  );
};

export default Home;
