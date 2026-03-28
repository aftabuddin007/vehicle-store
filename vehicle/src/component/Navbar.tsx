import { IUser } from '@/model/user.model';
import React from 'react';

const Navbar = ({user}:{user:IUser}) => {
    return (
        <div className='fixed top-0 w-full bg-black text-white z-50 shadow-lg '>
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                
            </div>
        </div>
    );
};

export default Navbar;