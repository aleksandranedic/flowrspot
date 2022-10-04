import React from 'react';
import {Flower} from "../model/FlowerInterface"
import {AiFillStar} from "react-icons/ai"

const FlowerCard: React.FC<Flower> = (flower) => {
    return (
        <div className='relative'>
            <img src={flower.flower.profile_picture} alt={flower.flower.name} className="flower-img"/>
            
            <button className={`fav_button ${flower.flower.favorite ? "pink-button" : "bg-white gray-button"  }`}>
                <AiFillStar fill='#D4D8D9' size={18}/>
            </button>

            <div className='flowercard-info'>
                <p className='font-Ubuntu font-bold text-2xl' >{flower.flower.name}</p>
                <p className='font-Ubuntu font-extralight'>{flower.flower.latin_name}</p>
                <button className={`button mt-10 ${flower.flower.favorite ? "pink-button" : "gray-button"}`}> {flower.flower.sightings} sightings </button>
            </div>
        </div>
    );
}

export default FlowerCard;