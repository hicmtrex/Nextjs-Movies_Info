import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/bootstrap.min.css';
import '../styles/globals.css';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';
import ContextProvider from '../context/contextProvider';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ContextProvider>
        <Header />
        <div id='product__bg'>
          <Container>
            <main>
              <Component {...pageProps} />
            </main>
          </Container>
          <footer className='text-center text-warning py-3 mt-auto'>
            hicmtrex all copyrights reserved &copy; 2022
          </footer>
        </div>
      </ContextProvider>
    </UserProvider>
  );
}

export default MyApp;
