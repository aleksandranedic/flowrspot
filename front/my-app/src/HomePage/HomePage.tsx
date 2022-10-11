import React from "react";
import Banner from "./Banner";
import FlowerCardsDisplay from "../FlowerCards/FlowerCardsDisplay";

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container h-auto pt-3">
      <Banner />
      <div className="p-4">
        <FlowerCardsDisplay />
      </div>
    </div>
  );
};

export default HomePage;
