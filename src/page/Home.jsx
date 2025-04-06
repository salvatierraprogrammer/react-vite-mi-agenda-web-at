import React, { useRef } from 'react';
import { Container } from '@mui/material';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Session1 from '../components/Session1';
import Session2 from '../components/Session2';
import Session3 from '../components/Session3';
import Session4 from '../components/Session4';
import Session5 from '../components/Session5';

const Home = () => {
  const downloadRef = useRef(null);
 

  const scrollToDownload = () => {
    downloadRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header scrollToDownload={() => downloadRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Session1 scrollToDownload={scrollToDownload}/>
        <Session2 />
       
        <Session3 refProp={downloadRef} />
        <Session4 />
        <Session5 />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
