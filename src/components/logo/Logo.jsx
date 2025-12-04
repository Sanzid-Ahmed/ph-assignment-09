import React from 'react';
import { MdOutlinePets } from "react-icons/md";


const Logo = () => {
    return (
        <div className='flex items-center justify-center'>
            <MdOutlinePets className='text-white text-3xl'/>
            <h1 className='text-white font-bold text-2xl'>petCare</h1>
        </div>
    );
};

export default Logo;