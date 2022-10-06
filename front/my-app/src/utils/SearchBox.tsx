import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

const SearchBox:React.FC = () => {
    return (
        <div className='searchbox'>
            <div className='bg-white w-2/3 lg:w-1/2 flex'>
                <input type="text" className='w-11/12 pl-2 md:text-lg focus:outline-none'  placeholder='Looking for something specific?'/>
                <button className='w-1/12 flex justify-center items-center'>
                    <AiOutlineSearch fill='#E4988D' size={22}/>
                </button>
            </div>
        </div>
    );
}

export default SearchBox;