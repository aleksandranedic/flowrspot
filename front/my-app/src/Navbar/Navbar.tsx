import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import { infoAboutLogedUser } from '../fetch-data/services/userService';
import { useFetch } from '../fetch-data/useFetch';
import { LogedUser, UserInfo } from '../model/UserInfo';
import LogedNavOption from './LogedNavOption';
import NotLogedNavOptions from './NotLogedNavOption';


const Navbar:React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    const [logedUser, isPending, error] = useFetch<UserInfo>(infoAboutLogedUser, "users/me");

    if(logedUser) {
        LogedUser.createLogedUser(logedUser.user.id, logedUser.user.first_name, logedUser.user.last_name)
    }

    return (
        <div className='navbar relative'>
            <div className='w-1/2 flex pt-2'>
                <a href='/#' className='flex items-start lg:items-center'>
                    <img src='../images/icons/logo.png' alt='logo'/>
                    <p className='text-primary-dark ml-1 mt-1 lg:mt-0 font-bold'>FlowrSpot</p>
                </a>
            </div>
            <div className='bg-white z-40 w-1/2 pt-2'>
                <div className={`accordion ${open ? 'absolute top-12 right-1 lg:static' : 'absolute top-[-145px] right-1 opacity-0 lg:opacity-100 lg:static'}`}> 
                    <a href='/flowers' className='gray-text accordion-item'>Flowers</a>
                    <a href='/sightings' className='gray-text accordion-item'>Latest Sightings</a>
                    <a href='/favorites' className='gray-text accordion-item'>Favorites</a>
                    { !isPending && !logedUser && error && <>
                        <NotLogedNavOptions open={setOpen}/>
                    </>
                    }
                    { !isPending && logedUser && !error && 
                        <LogedNavOption name={LogedUser.fullName}/>
                    }
                </div>
            </div>

            <GiHamburgerMenu fill='#949EA0' size={26} className={`nav-button lg:hidden ${!open ? 'flex' : 'hidden'}`} onClick={() => setOpen(!open)}/>
            <IoMdClose fill='#949EA0' size={26} className={`nav-button lg:hidden ${open ? 'flex' : 'hidden'}`} onClick={() => setOpen(!open)}/>
        </div>
    );
}

export default Navbar;