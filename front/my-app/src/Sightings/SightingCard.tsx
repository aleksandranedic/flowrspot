import { SightingDetails } from "../model/SightingInterface";
import {MdLocationOn} from 'react-icons/md'
import {AiFillMessage, AiFillHeart} from 'react-icons/ai'


interface SightingCardProps {
    sighting: SightingDetails
}
 
const SightingCard: React.FunctionComponent<SightingCardProps> = ({sighting}) => {
    return ( 
        <div className="flex flex-col">
            <div className="relative h-1/2">
                <img src={sighting.picture} alt={sighting.name} className="object-cover w-full h-full rounded-t"/>
                <div className="absolute top-3 left-3 bg-white rounded-3xl shadow-xl flex items-center gap-2 pl-3 pr-3">
                    <MdLocationOn fill="#DF9186" />
                    <p className="font-Ubuntu text-primary-text">{sighting.longitude}</p>
                </div>
                <div className="flex flex-col gap-4 p-5 bg-white">
                    <div className="flex gap-5 justify-start">
                        <img src="../images/profile_placeholder.jpg" alt="user" className="mb-5 lg:mb-0 rounded-full max-h-12 object-contain cursor-pointer" />
                        <div className="flex flex-col justify-start">
                            <p className="font-Ubuntu text-secondary-title">{sighting.flower.name}</p>
                            <p className="font-Ubuntu text-secondary-gray text-sm italic"> By {sighting.user.full_name}</p>
                        </div>
                    </div>
                    <div className="cursor-default font-Montserrat !font-medium text-secondary-gray text-justify tracking-wider truncate">
                        {sighting.description}
                    </div>
                    <hr/>
                    <div className="flex justify-start gap-7 font-Ubuntu text-secondary-gray">
                        <span className="flex gap-3">
                            <AiFillMessage fill="#DADADA" size={22}/>
                            {sighting.comments_count} comments
                        </span>
                        
                        <span className="flex gap-3">
                            <AiFillHeart fill="#DADADA" size={22}/>
                            {sighting.likes_count} likes
                        </span>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    
     );
}
 
export default SightingCard;