import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Row, Image, ListGroup, Carousel } from 'react-bootstrap';
import { BsFillStarFill } from 'react-icons/bs';
import MovieContext from '../../context/context-app';
//import { getAllProducts, getProductById } from '../../config/helper';
import ReactPlayer from 'react-player/youtube';
import { useUser } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import axios from 'axios';

const ProductDetail = ({ product }) => {
  const router = useRouter();
  const {
    addFavorite,
    removeFavorite,
    favorites,
    product = productCtx,
    getProductById,
  } = useContext(MovieContext);
  const { user } = useUser();
  const isFavourite = favorites.find((f) => f._id === product._id);
  // const { id } = router.query;

  // useEffect(() => {
  //   getProductById(id);
  // }, [id]);

  // console.log(product);
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name='description' content={product?.desc?.substring(0, 50)} />
      </Head>
      <Row className='mt-3'>
        <Col md={6}>
          <Carousel>
            <Carousel.Item>
              <Image
                className='rounded'
                style={{ height: '400px', width: '600px' }}
                src={product.img}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className='rounded'
                style={{ height: '400px', width: '600px' }}
                src={product.imgSm}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6}>
          <ListGroup variant='flush'>
            <ListGroup.Item as='h3'>
              {product?.title}
              <span className='favorite__movie'>
                <BsFillStarFill
                  onClick={() =>
                    !user
                      ? router.push('/api/auth/login')
                      : !isFavourite
                      ? addFavorite(product)
                      : removeFavorite(product)
                  }
                  className='ms-5'
                  color={isFavourite ? '#ff8800' : '#e8d3d3'}
                />
              </span>
            </ListGroup.Item>
            <ListGroup.Item as='h6'>Genre : {product?.genre}</ListGroup.Item>
            <ListGroup.Item as='h6'>
              Type : {product?.isSeries ? 'Serie' : 'Movie'}
            </ListGroup.Item>
            <ListGroup.Item as='h6'>
              <Image
                rounded
                fluid
                style={{ width: '50px', marginRight: '10px' }}
                src='/images/Imdb_logo.png'
                alt=''
              />
              {'   '}
              {product?.rating}
            </ListGroup.Item>
            <ListGroup.Item> {product?.desc}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col md={6}>
          <ReactPlayer
            width='600px'
            height='400px'
            url={product?.trailer}
            controls={true}
            config={{ file: { attributes: { autoPlay: false } } }}
          />
        </Col>
      </Row>
    </>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { data } = await axios.get(
    `https://nextjs-movies-info.vercel.app/api/products/${params.id}`
  );

  return {
    props: {
      product: data,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await axios.get(
    `https://nextjs-movies-info.vercel.app/api/products`
  );

  const ids = data.map((product) => product._id);
  const params = ids.map((id) => ({ params: { id } }));

  return {
    paths: params,
    fallback: 'blocking',
  };
};

export default ProductDetail;
