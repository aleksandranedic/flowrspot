import React from "react";
import FlowerCardsDisplay from "./FlowerCardsDisplay";
import { useAppSelector } from "../state/hooks";
import { FavoriteFlower } from "../model/FlowerInterface";

const Favorites: React.FunctionComponent = () => {
  const flowers:FavoriteFlower[] = useAppSelector((state) => state.loggedUser.favoriteFlowers.flowers);
  
  return (
      <FlowerCardsDisplay />
  )
  
};

export default Favorites;
