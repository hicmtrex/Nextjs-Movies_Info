import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Col, Row, Image, ListGroup, Carousel } from 'react-bootstrap';
import { BsFillStarFill } from 'react-icons/bs';
import MovieContext from '../../context/context-app';
import ReactPlayer from 'react-player/youtube';
import { useUser } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { getAllProducts, getProductById } from '../../config/helper';

const ProductDetail = ({ product }) => {
  const router = useRouter();
  const { addFavorite, removeFavorite, favorites } = useContext(MovieContext);
  const { user } = useUser();
  const isFavourite = favorites.find((f) => f._id === product._id);

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name='description' content={product?.desc?.substring(0, 50)} />
      </Head>
      <Row>
        <Col sm={12} xs={12} md={6}>
          <Carousel>
            <Carousel.Item>
              <Image
                style={{ height: '350px' }}
                className='d-block w-100 rounded'
                src={product.imgSm}
                alt='First slide'
                fluid
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                style={{ height: '350px' }}
                className='d-block w-100 rounded'
                src={product.img}
                alt='Second slide'
                fluid
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col sm={12} xs={12} md={6}>
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
            <ListGroup.Item>
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

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const product = await getProductById(id);

  return {
    props: {
      product,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const products = await getAllProducts();
  const paths = products.map((product) => ({ params: { id: product._id } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default ProductDetail;
