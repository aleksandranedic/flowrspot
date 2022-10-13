import React from "react";
import { FlowerData } from "../model/FlowerInterface";
import { useAppSelector } from "../state/hooks";
import { AiFillStar } from "react-icons/ai";
import { markFavoriteFlower, unmarkFlowerFavorite } from "../fetch-data/services/flowerService";
import { backlink } from "../utils/Constants";

const FlowerCard: React.FC<FlowerData> = ({ flower }) => {
  const loged = useAppSelector((state) => state.logedUser.loged);

  function setFavorite(id: number, favorite:boolean, favorite_id:number) {
      if (favorite) {
        unmarkFlowerFavorite(backlink +  `flowers/${id}/favorites/${favorite_id}`)
      }
      else {
        markFavoriteFlower( backlink + `flowers/${id}/favorites`);
      }
  }

  return (
    <div className="relative">
      <img
        src={flower.profile_picture}
        alt={flower.name}
        className="flower-img"
      />

      <button
        onClick={() => setFavorite(flower.id, flower.favorite, 4)}
        className={`fav_button ${
          flower.favorite ? "pink-button" : "bg-white gray-button"
        } ${loged ? "flex" : "hidden"}`}
      >
        <AiFillStar fill="#D4D8D9" size={18} />
      </button>

      <div className="flowercard-info">
        <p className="font-Ubuntu font-bold text-2xl">{flower.name}</p>
        <p className="font-Ubuntu font-extralight">{flower.latin_name}</p>
        <button
          className={`button mt-10 ${
            flower.favorite ? "pink-button" : "gray-button"
          }`}
        >
          {" "}
          {flower.sightings} sightings{" "}
        </button>
      </div>
    </div>
  );
};

export default FlowerCard;
