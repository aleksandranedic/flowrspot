import { useParams } from "react-router-dom";
import { Sighting } from "../model/SightingInterface";
import SightingCard from "./SightingCard";

interface UserSightingsDisplayProps {
    sightings: Sighting[],
    userFullName: string
}
 
const UserSightingsDisplay: React.FunctionComponent<UserSightingsDisplayProps> = ({sightings, userFullName}) => {
    const { id } = useParams<{id: string}>();
    const setSighting = (sighting: Sighting, userFullName: string) => {
        sighting.userFullName = userFullName;
        sighting.userId = +id;
        return sighting;
    }

    return (  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-4 pr-4 bg-secondary-background ">
        {sightings.map((sighting) => (
            <SightingCard key={sighting.id} sighting={setSighting(sighting, userFullName)} />
        
      ))}
    </div> 
    );
}
 
export default UserSightingsDisplay;