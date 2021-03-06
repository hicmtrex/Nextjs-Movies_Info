import { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Paginate from '../../components/Paginate';
import Product from '../../components/Product';
import { getAllProducts } from '../../config/helper';
import MovieContext from '../../context/context-app';

const ProductsPage = ({ staticProducts }) => {
  const { products, setProducts, search } = useContext(MovieContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);

  useEffect(() => {
    setProducts(staticProducts);
  }, [search]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Row>
      {currentPosts.map((movie) => (
        <Col key={movie._id} sm={12} md={6} lg={4} xl={3}>
          <Product movie={movie} />
        </Col>
      ))}
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        changePage={changePage}
      />
    </Row>
  );
};

export default ProductsPage;
