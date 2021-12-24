import { Card, Image } from 'react-bootstrap';
import Link from 'next/link';

const Product = ({ movie }) => {
  return (
    <Card className='p-2 rounded my-2 shadow' style={{ height: '25rem' }}>
      <Link href={`/products/${movie._id}`}>
        <a>
          <Card.Img
            variant='top'
            src={movie.imgSm}
            style={{ height: '15rem' }}
          />
          <Card.Body>
            <Card.Title>
              <strong>{movie.title}</strong>
            </Card.Title>
            <Card.Text as='div'>
              Type : {movie.isSeries ? 'Series' : 'Movie'}
            </Card.Text>
            <Card.Text as='div'> Genre : {movie.genre} </Card.Text>
            <Card.Text as='div'>
              <Image
                rounded
                fluid
                style={{ width: '50px', marginRight: '10px' }}
                src='/images/Imdb_logo.png'
                alt=''
              />
              {'   '}
              {movie?.rating}
            </Card.Text>
          </Card.Body>
        </a>
      </Link>
    </Card>
  );
};

export default Product;
