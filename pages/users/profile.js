import { useUser } from '@auth0/nextjs-auth0';
import React, { useContext, useEffect } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import Loader from '../../components/Loader';
import MovieContext from '../../context/context-app';
import Product from '../../components/Product';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter();
  const { favorites } = useContext(MovieContext);
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user]);

  if (isLoading) return <Loader />;

  return (
    <>
      <Head>
        <title>{user.name}</title>
      </Head>
      <section className='hero'>
        <div className='image'>
          <img src={user?.picture} alt='' />
        </div>
        <h1>{user?.name}</h1>
        <p>{user?.email}</p>
      </section>
      <Row>
        <h2 className='text-center text-warning mt-2'>My Favorite Movies</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        {favorites.map((favorite) => (
          <Col md={3} key={favorite._id}>
            <Product movie={favorite} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Profile;
