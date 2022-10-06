import React, {useState} from 'react'
import ProfileModal from '../modals/ProfileModal';

interface LogedNavOptionProps {
    name: string
}
 
const LogedNavOption: React.FunctionComponent<LogedNavOptionProps> = ({name}) => {
    const [open, setOpen] = useState<boolean>(false);
    const [openProfile, setOpenProfile] = useState<boolean>(false)

    return ( 
        <div className='flex items-center justify-start gap-2'>
            <p className='text-secondary-gray accordion-item cursor-default'> {name} </p>
            <img onClick={() => setOpen(!open)} src='../images/profile_placeholder.jpg' alt="profile pic" className='mb-5 lg:mb-0 rounded-full max-h-10 object-contain cursor-pointer'/>
            
            <div className={`flex-col gap-2 absolute top-44 left-1 lg:top-12 lg:left-auto w-36 bg-white ${open ? 'flex' : 'hidden'}`}>
                <p className='gray-text cursor-pointer border-b-2 w-full p-2 pr-4 !flex !justify-end' onClick={() => setOpenProfile(!openProfile)}>Profile</p>
                <p className='gray-text cursor-pointer w-full p-2 pr-4 pt-0 !flex !justify-end'>Settings</p>
            </div>

            <ProfileModal openModal={openProfile} setOpenModal={setOpenProfile}/>
        </div>
     );
}
 
export default LogedNavOption;