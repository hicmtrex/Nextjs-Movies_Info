import { useUser } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import { getAllProducts } from '../config/helper';
import MovieContext from '../context/context-app';
import ProductsPage from './products';

const Home = ({ productsProps }) => {
  const { products, setProducts, search } = useContext(MovieContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);
  const { isLoading } = useUser();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setProducts(productsProps);
  }, [search]);

  const changePage = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Head>
        <title>Tv Show</title>
        <meta name='description' content='best movies and series in tv show' />
      </Head>
      <h1 className='text-center text-warning'>Tv Show</h1>
      {isLoading ? <Loader /> : <ProductsPage products={currentPosts} />}
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        changePage={changePage}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const products = await getAllProducts();

  return {
    props: {
      productsProps: products,
    },
    revalidate: 600,
  };
};

export default Home;
