import React, { useState } from "react";
import { favoriteFlowerData, fetchFavoriteFlowers } from "../fetch-data/services/flowerService";
import { useFetch } from "../fetch-data/useFetch";
import { backlink } from "../utils/Constants";
import FlowerCardsDisplay from "./FlowerCardsDisplay";

const Favorites: React.FunctionComponent = () => {
  const [currPage, setCurrPage] = useState<number>(1);
  const [data, isPending, error] = useFetch<favoriteFlowerData>(
    fetchFavoriteFlowers,
    backlink + "flowers/favorites?page=" + currPage
  );
  console.log(data);
  return (
      <FlowerCardsDisplay />
  )
  
};

export default Favorites;
