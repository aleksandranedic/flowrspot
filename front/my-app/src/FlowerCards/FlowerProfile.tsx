import { useParams } from "react-router-dom";
import { fetchFlowerDetails } from "../fetch-data/services/flowerService";
import { fetchFlowerSighting, sightingDetailsData } from "../fetch-data/services/sightingService";
import { useFetch } from "../fetch-data/useFetch";
import { FlowerDetails } from "../model/FlowerInterface";
import SightingsCardsDisplay from "../Sightings/SightingsCards";
import FlowerBanner from "./FlowerBanner";
import FlowerInfo from "./FlowerInfo";

const FlowerProfile: React.FunctionComponent = () => {
  let { id } = useParams<{ id: string }>();
  const [data, isPending, error] = useFetch<FlowerDetails>(fetchFlowerDetails,`flowers/${id}`);
  const [sightingsData, isPendingSightings, errorSightings] = useFetch<sightingDetailsData>(fetchFlowerSighting, `flowers/${id}/sightings`)
  
  return (
    <>
      {!isPending && !error && data && (
        <div className="bg-secondary-background h-fit w-full">
            <FlowerBanner data={data} />
            <FlowerInfo data = {data} />
            {!isPendingSightings && !errorSightings && sightingsData && <SightingsCardsDisplay sightings={sightingsData.sightings}/>  }
        </div>
      )}
    </>
  );
};

export default FlowerProfile;
