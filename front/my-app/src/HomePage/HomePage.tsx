import React from 'react';
import Banner from './Banner'
import FlowerCards from '../FlowerCards/FlowerCards';

function HomePage() {
  return (
    <div className="homepage-container h-full pt-3">
      <Banner />
      <FlowerCards />
    </div>
  );
}

export default HomePage;
