import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Image,
  Form,
  Button,
} from 'react-bootstrap';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import { useContext } from 'react';
import MovieContext from '../context/context-app';

const Header = () => {
  const { search, setSearch, searchHandler } = useContext(MovieContext);
  const { user } = useUser();

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Link href='/' passHref>
          <Navbar.Brand>Tv-Show</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Form onSubmit={(e) => e.preventDefault()} className='d-flex'>
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type='search'
                placeholder='Search'
                className='me-2'
              />
              <Button
                type='submit'
                onClick={() => searchHandler(search)}
                variant='outline-dark'
              >
                Search
              </Button>
            </Form>
          </Nav>

          {user ? (
            <Nav>
              <NavDropdown title={user.name} id='collasible-nav-dropdown'>
                <Link href='/users/profile' passHref>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </Link>
                <Link href='/api/auth/logout' passHref>
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Nav.Link href='#pricing'>
                <Image
                  variant='top'
                  className='rounded'
                  style={{ height: '35px', width: '35px' }}
                  src={user.picture}
                />
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Link href='/api/auth/login' passHref>
                <a className='nav-link'>Login</a>
              </Link>

              <Link href='/api/auth/login' passHref>
                <a className='nav-link'>Register</a>
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
