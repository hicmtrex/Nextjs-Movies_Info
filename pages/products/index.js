import { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../../components/Product';
import MovieContext from '../../context/context-app';

const ProductsPage = ({ products }) => {
  const { getProducts, products: productsCtx } = useContext(MovieContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(productsCtx);
  return (
    <Row>
      {productsCtx.map((movie) => (
        <Col key={movie._id} sm={12} md={6} lg={4} xl={3}>
          <Product movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductsPage;
