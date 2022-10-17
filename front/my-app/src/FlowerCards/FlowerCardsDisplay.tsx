import React from "react";
import FlowerCards from "../FlowerCards/FlowerCards";
import PaginationBox from "../utils/PaginationBox";
import { Flower } from "../model/FlowerInterface";

interface FlowerCardsDisplayProps {
  setCurrentPage: (num:number) => void,
  totalPages: number,
  data: Flower[]
}

const FlowerCardsDisplay: React.FC<FlowerCardsDisplayProps> = ({setCurrentPage, totalPages, data}) => {

  return (
    <div>    
          <FlowerCards flowers={data} />
          <PaginationBox
            currPageHandler={setCurrentPage}
            maxPages={totalPages}
          />   
    </div>
  );
};

export default FlowerCardsDisplay;
