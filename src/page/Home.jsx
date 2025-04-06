import React from 'react';
import { Container } from '@mui/material';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Session1 from '../components/Session1';
import Session2 from '../components/Session2';
import Session3 from '../components/Session3';
import Session4 from '../components/Session4';
import Session5 from '../components/Session5';

const Home = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Session1 />
        <Session5 />
        <Session2 />
        <Session3 />
        <Session4 />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
