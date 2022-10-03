import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

function Navbar() {
    let [open, setOpen] = useState(false);

    return (
        <div className='navbar'>
            <div className='w-1/2 flex pt-4'>
                <a href='/#'>
                    <span className='flex items-start lg:items-center'>
                        <img src='../images/icons/logo.png' alt='logo'/>
                        <p className='text-primary-dark ml-1 mt-1 lg:mt-0 font-bold'>FlowrSpot</p>
                    </span>
                </a>
            </div>
            <div className='bg-white z-100 w-1/2 pt-4'>
                <div className={`accordion ${open ? 'absolute top-12 right-8 lg:static' : 'absolute top-[-145px] right-8 lg:static'}`}> 
                    <a href='/flowers' className='gray-text accordion-item'>Flowers</a>
                    <a href='/sightings'className='gray-text accordion-item'>Latest Sightings</a>
                    <a href='/favorites' className='gray-text accordion-item'>Favorites</a>
                    <p className='pink-text accordion-item cursor-pointer'>Login</p>
                    <div className='accordion-item'>
                        <button className='button'> New account</button>
                    </div>
                </div>
            </div>

            <GiHamburgerMenu fill='#949EA0' size={26} className={`nav-button lg:hidden ${!open ? 'flex' : 'hidden'}`} onClick={() => setOpen(!open)}/>
            <IoMdClose fill='#949EA0' size={26} className={`nav-button lg:hidden ${open ? 'flex' : 'hidden'}`} onClick={() => setOpen(!open)}/>
            
        </div>
    );
}

export default Navbar;