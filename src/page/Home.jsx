import React, { useRef } from 'react';
import { Container } from '@mui/material';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Session1 from '../components/Session1';
import Session2 from '../components/Session2';
import Session3 from '../components/Session3';
import Session4 from '../components/Session4';
import Session5 from '../components/Session5';
import ScrollTopButton from '../components/ScrollTopButton';

const Home = () => {
  const session1Ref = useRef(null);
  const session2Ref = useRef(null);
  const session3Ref = useRef(null);
  const session4Ref = useRef(null);
  const session5Ref = useRef(null);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header
        onNavigate={{
          inicio: () => scrollToRef(session1Ref),
          servicios: () => scrollToRef(session2Ref),
          descargar: () => scrollToRef(session3Ref),
          sobreMi: () => scrollToRef(session4Ref),
          contacto: () => scrollToRef(session5Ref),
        }}
      />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <div ref={session1Ref}>
        <Session1 scrollToDownload={() => scrollToRef(session3Ref)} />
      </div>
        <div ref={session2Ref}><Session2 /></div>
        <div ref={session3Ref}><Session3 /></div>
        <div ref={session4Ref}><Session4 /></div>
        <div ref={session5Ref}><Session5 /></div>
        <ScrollTopButton />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
