import React from 'react';
import { LogedUser } from '../model/UserInfo';
import SearchBox from '../utils/SearchBox';

const Banner: React.FC = () => {
    return (
        <div className='relative'>
            <div className={`w-full h-fit`}>
                <img src="../images/banner.png" alt='banner' className={`banner ${LogedUser.isUserLoged() ? "opacity-0 !h-52" : "!opacity-100"}`}/>
            </div>
            <div className={`banner-text flex flex-col items-center w-full justify-center ${LogedUser.isUserLoged() ? "hidden" : "block"}`}>
                <p className='font-Montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Discover flowers around you</p>
                <p className='font-PlayfairDisplay text-xs sm:text-base md:text-xl lg:text-2xl mt-2 font-thin'>Explore between more that 8.427 sightings</p>
            </div>
            <SearchBox />  
        </div>
    );
}

export default Banner;