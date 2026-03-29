"use client";
import { IUser } from '@/model/user.model';
import Image from 'next/image';

import logo from '@/assets/logo.png'
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
function Navbar ({user}:{user:IUser}){
    const router = useRouter()
    // console.log(user);
    return (
        <div className='fixed top-0 w-full bg-black text-white z-50 shadow-lg '>
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                {/* logo */}
                 <div className="flex items-center gap-2 cursor-pointer" onClick={()=>router.push("/")}>
                <Image src={logo} width={40} height={40} alt='logo' className='rounded-full'></Image>
                <span className="text-xl font-semibold hidden sm:inline">Vehicle Store</span>

                 </div>
                  {user.role == "user" && <div className="hidden md:flex gap-8">
<NavItem label="Home" path="/" router={router}></NavItem>
<NavItem label="Categories" path="/category" router={router}></NavItem>
<NavItem label="Shop" path="/shop" router={router}></NavItem>
<NavItem label="Orders" path="/orders" router={router}></NavItem>
                    </div>}
            </div>
        </div>
    );
};

export default Navbar;
const NavItem = ({label,path,router}:any)=>(
    <button onClick={()=>router.push(path)} className="hover:text-gray-300 text-white">{label}</button>

)