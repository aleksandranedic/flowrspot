import { AiFillHeart, AiFillMessage } from "react-icons/ai";

interface SightingUserInfoProps {
    flowerName: string,
    userFullName: string,
    description: string,
    commentsCount? :number,
    likesCount? :number
}
 
const SightingUserInfo: React.FunctionComponent<SightingUserInfoProps> = ({flowerName, userFullName, description, commentsCount, likesCount}) => {
    return ( 
        <div className="flex flex-col gap-4 p-5 bg-white">
                    <div className="flex gap-5 justify-start">
                        <img src="../images/profile_placeholder.jpg" alt="user" className="mb-5 lg:mb-0 rounded-full max-h-12 object-contain cursor-pointer" />
                        <div className="flex flex-col justify-start">
                            <p className="font-Ubuntu text-secondary-title">{flowerName}</p>
                            <p className="font-Ubuntu text-secondary-gray text-sm italic"> By {userFullName}</p>
                        </div>
                    </div>
                    <div className={`cursor-default font-Montserrat !font-medium text-secondary-gray text-justify tracking-wider ${window.location.href.includes("sighting/") ? "break-words" : "truncate"}`}>
                        {description}
                    </div>
                    <hr/>
                    {(typeof commentsCount !== "undefined") && (typeof likesCount !== "undefined") && <div className="flex justify-start gap-7 font-Ubuntu text-secondary-gray">
                        <span className="flex gap-3">
                            <AiFillMessage fill="#DADADA" size={22}/>
                            {commentsCount} comments
                        </span>
                        
                        <span className="flex gap-3">
                            <AiFillHeart fill="#DADADA" size={22}/>
                            {likesCount} likes
                        </span>
                    </div>}
                </div>
     );
}
 
export default SightingUserInfo;