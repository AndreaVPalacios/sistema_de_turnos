import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div className="home">
      
      <Header />
      <Features/>
      
    </div>
  );
}

export default Home;