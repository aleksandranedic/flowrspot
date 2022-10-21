import { useParams } from "react-router-dom";
import { fetchUserSighting, sightingData } from "../fetch-data/services/sightingService";
import { fetchUser } from "../fetch-data/services/userService";
import { useFetch } from "../fetch-data/useFetch";
import { UserInfo } from "../model/UserInfo";
import UserSightingsDisplay from "../Sightings/UserSightingsDisplay";
import UserProfileInfo from "./UserProfileInfo";

const UserProfile: React.FunctionComponent = () => {
    const { id } = useParams<{id:string}>();
    const [userData, isPending, error] = useFetch<UserInfo>(fetchUser, `users/${id}`);
    const [sightingsData, isPendingSightings, errorSightings] = useFetch<sightingData>(fetchUserSighting, `users/${id}/sightings`)
    return ( 
        <div className="bg-secondary-background h-full">
        {
            !isPending && !error && userData && <UserProfileInfo user={userData.user} sightingNum={sightingsData ? sightingsData.sightings.length : 0}/>
        }
        {
            !isPendingSightings && !errorSightings && sightingsData && <UserSightingsDisplay sightings={sightingsData.sightings} userFullName={userData?.user.first_name + " " + userData?.user.last_name}/>
        }
        </div>
     );
}
 
export default UserProfile;