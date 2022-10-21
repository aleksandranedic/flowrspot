import { UserData } from "../model/UserInfo";

interface UserProfileInfoProps {
    user: UserData
    sightingNum: number
}
 
const UserProfileInfo: React.FunctionComponent<UserProfileInfoProps> = ({user, sightingNum}) => {
    return ( 
        <div className="flex justify-between items-center p-14">
            <div className="flex flex-col sm:flex-row items-start justify-start gap-1 sm:gap-5">
                <img src="../images/profile_placeholder.jpg" alt="user" className=" rounded-full max-h-14 object-contain" />
                <div className="flex flex-col">
                    <p className="font-Ubuntu text-secondary-title !font-light text-2xl">{user.first_name + " " + user.last_name}</p>
                    <p className="text-secondary-inputLabel font-Ubuntu text-sm"> {sightingNum} sightings</p>
                </div>
            </div>
            <button className="pink-button !rounded !text-lg">Report</button>

        </div>
     );
}
 
export default UserProfileInfo;