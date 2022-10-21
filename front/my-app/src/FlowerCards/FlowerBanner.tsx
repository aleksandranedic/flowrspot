import { FlowerDetails } from "../model/FlowerInterface";
import AddSightingButton from "../utils/AddSightingButton";
import FavoriteButton from "../utils/FavoriteButton";
import SightingsButton from "../utils/SightingsButton";

interface FlowerBannerProps {
  data: FlowerDetails;
}

const FlowerBanner: React.FunctionComponent<FlowerBannerProps> = ({ data }) => {
  return (
    <>
      <div className="relative w-full h-96 sm:h-fit">
        <img
          src="../images/flower-banner.png"
          alt="banner"
          className="banner h-96 object-contain hidden sm:flex w-full"
        />

        <img
          src={data.flower.profile_picture}
          alt="profile"
          className="absolute w-full h-96 object-fill sm:top-32 sm:left-4 sm:rounded sm:w-80 brightness-50 sm:filter-none"
        />

        <div className="flex gap-x-5 gap-y-3 justify-start flex-wrap w-fit absolute top-1/2 left-6 sm:top-40 sm:left-1/2 lg:left-1/4 lg:ml-10 lg:top-1/2">
          <FavoriteButton flower={data.flower} />
          <SightingsButton
            favorite={data.flower.favorite}
            sightings={data.flower.sightings}
          />
          <p className="font-ubuntu text-5xl !font-light text-white w-full">
            {" "}
            {data.flower.name}{" "}
          </p>
          <p className="font-ubuntu text-lg !font-light text-white w-full">
            {" "}
            {data.flower.latin_name}{" "}
          </p>
        </div>
        <div className="absolute top-80 mt-10 right-64 sm:mt-0 sm:right-1/4 lg:right-32 lg:top-1/2 lg:mt-16">
          <AddSightingButton />
        </div>
      </div>
    </>
  );
};

export default FlowerBanner;
