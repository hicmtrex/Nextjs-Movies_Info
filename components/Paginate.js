import { Pagination } from 'react-bootstrap';

const Paginate = ({ postsPerPage, totalPosts, changePage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      {pageNumbers.map((num, index) => (
        <a key={index} className='me-1' onClick={() => changePage(num)}>
          <Pagination.Item active={num + 1 === postsPerPage}>
            {num}
          </Pagination.Item>
        </a>
      ))}
    </Pagination>
  );
};

export default Paginate;
