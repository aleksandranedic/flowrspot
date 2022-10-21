import React, { useEffect, useState } from "react";
import FlowerCardsDisplay from "./FlowerCardsDisplay";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { fetchUserFavorites } from "../fetch-data/services/userService";
import { setFavoriteFlowers } from "../state/logedUserSlice";
import { FlowerDetailsData } from "../model/FlowerInterface";

const Favorites: React.FunctionComponent = () => {
  const favFlowers:FlowerDetailsData[] = useAppSelector((state) => state.loggedUser.favoriteFlowers.flowers);
  const totalPages:number = useAppSelector((state) => state.loggedUser.favoriteFlowers.totalPages);
  const [currPage, setCurrPage] = useState<number>(1);

  const dispatch = useAppDispatch();
  
  useEffect( () => {
    setFlowerData();
  }, [currPage])


  const setFlowerData = async() => {
    const responseFlowers = await fetchUserFavorites(`flowers/favorites?page=${currPage}`)
    dispatch(setFavoriteFlowers(responseFlowers))
  }

  return (
    <div className="p-10">
      <FlowerCardsDisplay data={favFlowers} totalPages={totalPages} setCurrentPage={setCurrPage}/>
    </div>
  ) 
};

export default Favorites;
