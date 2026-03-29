"use client";
import { IUser } from '@/model/user.model';
import Image from 'next/image';
import { AnimatePresence, motion } from "motion/react"
import { CgProfile } from "react-icons/cg";
import { FaSnapchat } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import logo from '@/assets/logo.png'
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoMdLogIn } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { signOut } from 'next-auth/react';
import { IoCartOutline } from "react-icons/io5";
import { FaAlignJustify } from "react-icons/fa";
function Navbar ({user}:{user:IUser}){
    const router = useRouter()
    // console.log(user);
const [openManu,setOpenManu]=useState(false)




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
                    {/* desktop icons */}
                    <div className="hidden md:flex items-center gap-6">

      {user?.role == "user" && <IconBtn Icon={IoIosSearch } onClick={()=>router.push("/category")}>
        </IconBtn>}
<IconBtn Icon = {FaSnapchat} onClick={()=>router.push("/support")} ></IconBtn>
<div className="relative">
    {user?.image ? <Image className='w-10 h-10 rounded-full object-cover border border-gray-700 cursor-pointer' src={user?.image} alt='image' width={40} height={40} onClick={()=>setOpenManu(!openManu)}></Image>
:<IconBtn  Icon = {CgProfile} onClick={()=>setOpenManu(!openManu)} ></IconBtn> }

<AnimatePresence>
    { openManu && <motion.div  
    initial={{opacity:0,y:40}}
                animate={{opacity:1,y:-10}}
                transition={{duration:0.5}}
                exit={{opacity:0,y:-10}}className="absolute right-0 mt-2 w-48 bg-[#6a69693c] text-white backdrop-blur-lg rounded-md shadow-lg py-2 z-50 ">
<DropdownBtn Icon={CgProfile} label='profile' onClick={()=>{router.push("/profile"); setOpenManu(false)}}></DropdownBtn>

<DropdownBtn Icon={IoMdLogIn} label='Login' onClick={()=>{router.push("/login"); setOpenManu(false)}}></DropdownBtn>

<DropdownBtn Icon={RiLogoutBoxLine} label='LogOut' onClick={()=>{signOut(); setOpenManu(false)}}></DropdownBtn>

    </motion.div>}
</AnimatePresence>









</div>
{ user?.role == "user" && <CartBtn router={router} count = "5"></CartBtn>}
                    </div>
                    {/* mobile icon */}
                    <div className="md:hidden flex items-center gap-4">
                        {user?.role == "vendor" || user?.role == "admin" 
                        ?(<>
                        <IconBtn Icon = {FaSnapchat} onClick={()=>router.push("/support")} ></IconBtn>
                        <div className="relative">
    {user?.image ? <Image className='w-10 h-10 rounded-full object-cover border border-gray-700 cursor-pointer' src={user?.image} alt='image' width={32} height={32} onClick={()=>setOpenManu(!openManu)}></Image>
:<IconBtn  Icon = {CgProfile} onClick={()=>setOpenManu(!openManu)} ></IconBtn> }

<AnimatePresence>
    { openManu && <motion.div  
    initial={{opacity:0,y:40}}
                animate={{opacity:1,y:-10}}
                transition={{duration:0.5}}
                exit={{opacity:0,y:-10}}className="absolute right-0 mt-2 w-48 bg-[#6a69693c] text-white backdrop-blur-lg rounded-md shadow-lg py-2 z-50 ">
<DropdownBtn Icon={CgProfile} label='profile' onClick={()=>{router.push("/profile"); setOpenManu(false)}}></DropdownBtn>

<DropdownBtn Icon={IoMdLogIn} label='Login' onClick={()=>{router.push("/login"); setOpenManu(false)}}></DropdownBtn>

<DropdownBtn Icon={RiLogoutBoxLine} label='LogOut' onClick={()=>{signOut(); setOpenManu(false)}}></DropdownBtn>

    </motion.div>}
</AnimatePresence>









</div>
                        </>)
                        :(
                            <>
                            <IconBtn Icon={IoIosSearch } onClick={()=>router.push("/category")}>
        </IconBtn>
       
<IconBtn Icon = {FaSnapchat} onClick={()=>router.push("/support")} ></IconBtn>
<CartBtn router={router} count = "5"></CartBtn>
<FaAlignJustify />


                             </>
                        ) }
                    </div>
            </div>
        </div>
    );
};

export default Navbar;
// component
const NavItem = ({label,path,router}:any)=>(
    
         <motion.button whileHover={{scale:1.1}} onClick={()=>router.push(path)} className="hover:text-gray-300 ">{label}</motion.button>
    
   

)
const IconBtn = ({Icon,onClick}:any)=>(
    <motion.button whileHover={{scale:1.1}} onClick={onClick}>
        <Icon size={24}></Icon>
    </motion.button>)

const DropdownBtn = ({Icon,label,onClick,}:any)=>(
    <button className='flex items-center gap-3 w-full px-4 py-2 hover:bg-white/10 text-left' onClick={()=>onClick()} ><Icon size={18} ></Icon>{label}</button>

)
const CartBtn = ({router,count}:any)=>(
    <motion.button whileHover={{scale:1.1}} onClick={()=>router.push('/cart')} className='relative'>
        <IoCartOutline size={24}></IoCartOutline>
       {count > 0 && <span className='absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1'>{count}</span>}
    </motion.button>
)
