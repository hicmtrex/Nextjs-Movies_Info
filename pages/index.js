import { useUser } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import Loader from '../components/Loader';
import { getAllProducts } from '../config/helper';
import ProductsPage from './products';

const Home = ({ staticProducts }) => {
  const { isLoading } = useUser();

  return (
    <>
      <Head>
        <title>Tv Show</title>
        <meta name='description' content='best movies and series in tv show' />
      </Head>
      <h1 className='text-center text-warning'>Tv Show</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductsPage staticProducts={staticProducts} />
      )}
    </>
  );
};

export const getStaticProps = async () => {
  const products = await getAllProducts();

  return {
    props: {
      staticProducts: products,
    },
    revalidate: 600,
  };
};

export default Home;
