import { SightingDetails } from "../model/SightingInterface";
import {MdLocationOn} from 'react-icons/md'
import SightingUserInfo from "./SightingUserInfo";


interface SightingCardProps {
    sighting: SightingDetails
}
 
const SightingCard: React.FunctionComponent<SightingCardProps> = ({sighting}) => {
    return ( 
        <div className="flex flex-col cursor-pointer" onClick={() => window.location.href = window.location.href = `/sighting/${sighting.id}`}>
            <div className="relative h-1/2">
                <img src={sighting.picture} alt={sighting.name} className="object-cover w-full h-full rounded-t"/>
                <div className="absolute top-3 left-3 bg-white rounded-3xl shadow-xl flex items-center gap-2 pl-3 pr-3">
                    <MdLocationOn fill="#DF9186" />
                    <p className="font-Ubuntu text-primary-text">{sighting.longitude}</p>
                </div>
                <SightingUserInfo flowerName={sighting.flower.name} userFullName={sighting.user.full_name} description={sighting.description} commentsCount={sighting.comments_count} likesCount={sighting.likes_count}/>
            </div>
        </div>
     );
}
 
export default SightingCard;