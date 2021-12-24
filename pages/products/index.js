import { Col, Row } from 'react-bootstrap';
import Product from '../../components/Product';

const ProductsPage = ({ products }) => {
  return (
    <Row>
      {products.map((movie) => (
        <Col key={movie._id} sm={12} md={6} lg={4} xl={3}>
          <Product movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductsPage;
