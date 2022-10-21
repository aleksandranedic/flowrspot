import React from "react";
import { FlowerData } from "../model/FlowerInterface";
import FavoriteButton from "../utils/FavoriteButton";
import SightingsButton from "../utils/SightingsButton";


const FlowerCard: React.FC<FlowerData> = ({ flower }) => {

  const seeProfile = (id:number) => {
    window.location.href = `/flower/${id}`
  }

  return (
    <div className="relative cursor-pointer" onClick={() => seeProfile(flower.id)}>
      <img
        src={flower.profile_picture}
        alt={flower.name}
        className="flower-img"
      />
      <div className="absolute top-3 right-3">
        <FavoriteButton flower={flower}/>
      </div>

      <div className="flowercard-info">
        <p className="font-Ubuntu font-bold text-2xl">{flower.name}</p>
        <p className="font-Ubuntu font-extralight">{flower.latin_name}</p>
        <div className="mt-10 ">
          <SightingsButton favorite={flower.favorite} sightings={flower.sightings} />
        </div>
      </div>
    </div>
  );
};

export default FlowerCard;
