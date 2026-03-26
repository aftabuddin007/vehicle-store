"use client"
import React, { useEffect, useState } from 'react';
import { AnimatePresence,motion } from 'motion/react';
import { MdAdminPanelSettings } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import axios from 'axios';
const EditRoleAndPhone = () => {
const [role,setRole]=useState<string>("")
const [phone,setPhone]=useState<string>("")


const roles = [
    {label:"admin",value:"admin",icon:<MdAdminPanelSettings size={40}/> },
    {label:"vendor",value:"vendor",icon:<MdOutlineShoppingBag  size={40}/> },
    {label:"user",value:"user",icon:<FaRegUser  size={40}/> },
]
const [adminExist,setAdminExist] = useState(false)
useEffect(()=>{
    const checkAdmin = async ()=>{
        try{
    const res = await axios.get("/api/admin/check-admin")

setAdminExist(res.data.exists)
        }catch(err){
setAdminExist(false)
console.log(err);
        }
    }
    checkAdmin()
},[])
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6'>
            <AnimatePresence>
            <motion.div
            
            initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.5}}
exit={{opacity:0,y:-40}}
className='w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20'
>
    <h1 className='text-4xl font-semibold text-center mb-4'>Choose Your Role</h1>
    <p className="text-center text-gray-300 mb-8 text-base">Select your role and enter your mobile number for continue</p>
        <form className='flex flex-col gap-8'>
<input
 type="text"
 placeholder='Enter your mobile number'
 maxLength={11}
 required
 onChange={(e)=>setPhone(e.target.value)} value={phone}
 className='w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400'
 />
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {roles.map((rol)=>{
    const isAdminBlocked = rol.value == "admin" && adminExist
        return (
            <motion.div key={rol.value} 
            whileHover={!isAdminBlocked?{scale:1.07}:{}}
            onClick={()=>{
                if(isAdminBlocked){
                    alert("admin already exists")
                    return ;
                }
                setRole(rol.value)
            }}
            className={`cursor-pointer p-6 text-center rounded-2xl border transition text-lg font-medium ${role === rol.value ? "border-blue-500bg-blue-500/40":"border-white/20 bg-white/10 hover:bg-white/20"} ${
                isAdminBlocked && "opacity-40 cursor-not-allowed"
            }`}>
                <div className="flex justify-center mb-3">{rol.icon}</div>
                <p className="">{rol.value}</p>
                {isAdminBlocked && <p className='text-xs text-red-400'>Admin already exists</p>}

            </motion.div>
        )
    })}
 </div>
        </form>

            </motion.div>
            </AnimatePresence>
            




        </div>
    );
};

export default EditRoleAndPhone;