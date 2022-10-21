import React from "react";
import { FlowerData } from "../model/FlowerInterface";
import FavoriteButton from "../utils/FavoriteButton";
import SightingsButton from "../utils/SightingsButton";


const FlowerCard: React.FC<FlowerData> = ({ flower }) => {
  return (
    <div className="relative cursor-default">
      <img
        src={flower.profile_picture}
        alt={flower.name}
        className="flower-img"
      />
      <div className="absolute top-3 right-3 z-10">
        <FavoriteButton flower={flower}/>
      </div>

      <div className="flowercard-info">
        <p className="font-Ubuntu font-bold text-2xl">{flower.name}</p>
        <p className="font-Ubuntu font-extralight">{flower.latin_name}</p>
        <div className="mt-10 ">
          <SightingsButton favorite={flower.favorite} sightings={flower.sightings} flowerId={flower.id} />
        </div>
      </div>
    </div>
  );
};

export default FlowerCard;
