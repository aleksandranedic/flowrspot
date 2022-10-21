import { Sighting, SightingDetails } from "../model/SightingInterface";
import {MdLocationOn} from 'react-icons/md'
import SightingUserInfo from "../user/SightingUserInfo";


interface SightingCardProps {
    sightingDetails?: SightingDetails,
    sighting?: Sighting
}
 
const SightingMaxDetailsCard = (sighting: SightingDetails) => {
    return (
    <div className="flex flex-col cursor-default">
        <div className="relative h-1/2">
            <img onClick={() => window.location.href = window.location.href = `/sighting/${sighting.id}`} src={sighting.picture} alt={sighting.name} className="object-cover w-full h-full rounded-t cursor-pointer"/>
            <div className="absolute top-3 left-3 bg-white rounded-3xl shadow-xl flex items-center gap-2 pl-3 pr-3">
                <MdLocationOn fill="#DF9186" />
                <p className="font-Ubuntu text-primary-text">{sighting.longitude}</p>
            </div>
        <SightingUserInfo flowerName={sighting.flower.name} userFullName={sighting.user.full_name} userId={sighting.user.id} description={sighting.description} commentsCount={sighting.comments_count} likesCount={sighting.likes_count}/>
        </div>
    </div>
    )
}

const SightingMinDetailsCard = (sighting: Sighting) => {
    return (
    <div className="flex flex-col cursor-default">
        <div className="relative h-1/2">
        <img onClick={() => window.location.href = window.location.href = `/sighting/${sighting.id}`} src="../images/flower.jpg" alt={sighting.name} className="object-cover w-full h-full rounded-t cursor-pointer"/>
            <div className="absolute top-3 left-3 bg-white rounded-3xl shadow-xl flex items-center gap-2 pl-3 pr-3">
                <MdLocationOn fill="#DF9186" />
                <p className="font-Ubuntu text-primary-text">{sighting.longitude}</p>
            </div>
            <SightingUserInfo flowerName={"Flower name"} userFullName={sighting.userFullName ? sighting.userFullName : "User name"} userId={sighting.userId ? sighting.userId : -1} description={sighting.description} />
        </div>
    </div>
    )
}
const SightingCard: React.FunctionComponent<SightingCardProps> = ({sighting, sightingDetails}) => {
    if (sighting) {
        return SightingMinDetailsCard(sighting);
    }
    else if (sightingDetails) {
        return SightingMaxDetailsCard(sightingDetails);
    }
    else {
        return <></>
    }
}
 
export default SightingCard;