import React from "react";
import { FlowerList } from "../model/FlowerInterface";
import FlowerCard from "./FlowerCard";

const FlowerCards: React.FC<FlowerList> = ({ flowers }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {flowers.map((fl) => (
        <FlowerCard key={fl.id} flower={fl} />
      ))}
    </div>
  );
};

export default FlowerCards;
