import React from "react";
import { SearchProps } from "../model/Props";
import { useAppSelector } from "../state/hooks";
import SearchBox from "../utils/SearchBox";

const Banner: React.FC<SearchProps> = ({data, setFlowers}) => {
  const logged = useAppSelector((state) => state.loggedUser.logged);

  return (
    <div className="relative">
      <div className={`w-full h-fit`}>
        <img
          src="../images/banner.png"
          alt="banner"
          className={`banner ${logged ? "!opacity-0 !h-52" : "!opacity-100"}`}
        />
      </div>
      <div
        className={`banner-text flex flex-col items-center w-full justify-center ${
          logged ? "hidden" : "block"
        }`}
      >
        <p className="font-Montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Discover flowers around you
        </p>
        <p className="font-PlayfairDisplay text-xs sm:text-base md:text-xl lg:text-2xl mt-2 font-thin">
          Explore between more that 8.427 sightings
        </p>
      </div>
      <SearchBox data={data} setFlowers={setFlowers} />
    </div>
  );
};

export default Banner;
