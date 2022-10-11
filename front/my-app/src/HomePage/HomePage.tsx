import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import FlowerCardsDisplay from "../FlowerCards/FlowerCardsDisplay";
import { useFetch } from "../fetch-data/useFetch";
import { fetchFlowers, flowerData } from "../fetch-data/services/flowerService";
import { backlink } from "../utils/Constants";
import { Flower } from "../model/FlowerInterface";

const HomePage: React.FC = () => {
  const [currPage, setCurrPage] = useState<number>(1);
  const [data, isPending, error] = useFetch<flowerData>(
    fetchFlowers,
    backlink + "flowers?page=" + currPage
  );

  const [flowers, setFlowers] = useState<Flower[] | undefined>()

  useEffect( () => {
    setFlowers(data?.flowers)
  }, [data])

  function setSearchedFlowers(text: string) {
    let searchedData: Flower[] | undefined;
    if (text){
      searchedData = data?.flowers.filter(flower => isAMatch(text, flower))
    }
    else {
      searchedData = data?.flowers
    }
    setFlowers(searchedData);
  }

  function isAMatch(text:string, flower:Flower):boolean {
    let match:boolean = false;
    if (flower.name.includes(text) || flower.latin_name.includes(text)) {
        match = true;
    }
    return match;
  }

  return (
    <div className="homepage-container h-auto pt-3">
      {flowers && <Banner data={flowers} setFlowers={setSearchedFlowers} />}
      <div className="p-4">
        {!isPending && !error && data && flowers && (
          <FlowerCardsDisplay
            setCurrentPage={setCurrPage}
            totalPages={data.meta.pagination.total_pages}
            data={flowers}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
