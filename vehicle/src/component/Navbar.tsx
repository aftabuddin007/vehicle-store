"use client";
import { IUser } from '@/model/user.model';
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
function Navbar ({user}:{user:IUser}){
    const router = useRouter()
    return (
        <div className='fixed top-0 w-full bg-black text-white z-50 shadow-lg '>
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                {/* logo */}
                 <div className="flex items-center gap-2 cursor-pointer" onClick={()=>router.push("/")}>
                <Image src={logo} width={40} height={40} alt='logo'className='rounded-full'></Image>
                 </div>
            </div>
        </div>
    );
};

export default Navbar;