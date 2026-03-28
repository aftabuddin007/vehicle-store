"use client"
import React, { useEffect, useState } from 'react';
import { AnimatePresence,motion } from 'motion/react';
import { MdAdminPanelSettings } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';
const EditRoleAndPhone = () => {
const [role,setRole]=useState<string>("")
const [phone,setPhone]=useState<string>("")
const [loading,setLoading]=useState(false)

const roles = [
    {label:"admin",value:"admin",icon:<MdAdminPanelSettings size={40}/> },
    {label:"vendor",value:"vendor",icon:<MdOutlineShoppingBag  size={40}/> },
    {label:"user",value:"user",icon:<FaRegUser  size={40}/> },
]
const [adminExist,setAdminExist] = useState(false)
const router = useRouter()
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
const handleSubmit = async (e:React.FormEvent)=>{
e.preventDefault()
if(!role || !phone){
    alert("Please select the role enter your valid phone number")
}
setLoading(true)
try{
    const result = await axios.post("/api/user/edit-role-phone",{role,phone})
    console.log(result.data);
    setLoading(false)
    router.push("/")
}
catch(err){
    console.log(err);
}
}
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
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
<input
 type="text"
 placeholder='Enter your mobile number'
 maxLength={11}
 required
 onChange={(e)=>setPhone(e.target.value)} value={phone}
 className='w-full p-3 rounded-lg bg-white/10 border border-white/20 
  focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-200'
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
            className={`cursor-pointer p-6 text-center rounded-2xl border transition text-lg font-medium 
${role === rol.value 
  ? "border-blue-500 bg-blue-500/40 ring-2 ring-blue-500/50" 
  : "border-white/20 bg-white/10 hover:bg-white/20"} 
${isAdminBlocked && "opacity-40 cursor-not-allowed"}`}>
                <div className="flex justify-center mb-3">{rol.icon}</div>
                <p className="">{rol.value}</p>
                {isAdminBlocked && <p className='text-xs text-red-400'>Admin already exists</p>}

            </motion.div>
        )
    })}
 </div>
 <motion.button
    disabled={loading}
        type="submit"
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
        className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium mt-4"
    >
        {loading?<ClipLoader size={20} color='white'/>: "Submit Now"}
    </motion.button>
        </form>

            </motion.div>
            </AnimatePresence>
            




        </div>
    );
};

export default EditRoleAndPhone;