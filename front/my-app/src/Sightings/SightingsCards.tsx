import { SightingDetails } from "../model/SightingInterface";
import SightingCard from "./SightingCard";

interface SightingsCardsProps {
    sightings : SightingDetails[]
}
 
const SightingsCards: React.FunctionComponent<SightingsCardsProps> = ({sightings}) => {
    return ( 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-4 pr-4">
        {sightings.map((sighting) => (
            <SightingCard key={sighting.id} sightingDetails={sighting} />
      ))}
    </div> 
    );
}
 
export default SightingsCards;