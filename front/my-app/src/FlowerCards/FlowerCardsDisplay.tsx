import React from "react";
import FlowerCards from "../FlowerCards/FlowerCards";
import { FlowerDetailsData } from "../model/FlowerInterface";
import PaginationBox from "../utils/PaginationBox";

interface FlowerCardsDisplayProps {
  setCurrentPage: (num:number) => void,
  totalPages: number,
  data: FlowerDetailsData[]
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
