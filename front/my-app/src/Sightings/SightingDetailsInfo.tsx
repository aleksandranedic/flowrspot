import { SightingDetails } from "../model/SightingInterface";
import SightingUserInfo from "../user/SightingUserInfo";

interface SightingDetailsInfoProps {
    sighting: SightingDetails
}
 
const SightingDetailsInfo: React.FunctionComponent<SightingDetailsInfoProps> = ({sighting}) => {
    return (
        <div className="flex flex-col sm:flex-row gap-8 bg-white shadow-xl md:mr-8 md:ml-8 p-8 mb-10">
            <img src={sighting.picture} alt={sighting.name} className="object-fill w-80 h-80"/>
            <SightingUserInfo flowerName={sighting.flower.name} userFullName={sighting.user.full_name} userId={sighting.user.id} description={sighting.description} commentsCount={sighting.comments_count} likesCount={sighting.likes_count}/>
        </div>
      );
}
 
export default SightingDetailsInfo;