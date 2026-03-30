'use client'
import  { useState } from 'react';
import { 
  MdDashboard 
} from "react-icons/md";
import { AnimatePresence ,motion} from 'motion/react';
import { 
  FaStore, 
  FaShoppingBag, 
  FaUsers, 
  FaBox, 
  FaTruck, 
  FaCog 
} from "react-icons/fa";

import { 
  FaCheckCircle 
} from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const AdminDashboard = () => {
const [activePage,setActivePage] = useState("dashboard")
const [openManu,setOpenManu] = useState(false)



    const menu = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <MdDashboard size={22} />
  },
  {
    id: "vendors",
    label: "Vendor Details",
    icon: <FaStore size={22} />
  },
  {
    id: "orders",
    label: "User Orders",
    icon: <FaShoppingBag size={22} />
  },
  {
    id: "deliveries",
    label: "Deliveries",
    icon: <FaTruck size={22} />
  },
  {
    id: "vendor-approval",
    label: "Vendor Approval",
    icon: <FaCheckCircle size={22} />
  },
  {
    id: "product-approval",
    label: "Product Approval",
    icon: <FaCheckCircle size={22} />
  },
  {
    id: "settings",
    label: "Settings",
    icon: <FaCog size={22} />
  }
];

    return (
        <div className='w-full min-h-screen  bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white '>
          {/* mobile tab bar */}
          <div className="lg:hidden fixed top-16 left-0 w-full bg-black border-gray-700 z-50 border-b items-center px-6 py-3 flex justify-between ">
<h1 className="text-xl font-bold ">Admin Panel</h1>
{!openManu && (<button className="" onClick={()=>setOpenManu(true)}><AiOutlineMenu size={25}></AiOutlineMenu></button>)}
          </div>
          






            {/*sidebar for large area */}
            <motion.div 
            initial={{opacity:0,x:-50}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.5}}
            className='hidden lg:block w-72 h-screen bg-gray-800/40 border-r border-gray-700 p-6 backdrop-blur-xl'> 
<h1 className="text-xl font-bold mb-6">Admin Panel</h1>
<div className="flex flex-col gap-3">
    {
        menu.map((item)=>(
                <button key={item.id}
                onClick={()=>setActivePage(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm ${activePage === item.id ? "bg-blue-600 text-white" : "bg-gray-800 hover:bg-blue-700"}`} >
                {item.icon}
                <span>{item.label}</span>

            </button>
        ))
    }
</div>

            </motion.div>
            {/* sidebar for mobile */}
<AnimatePresence>
    {openManu && (<motion.div 
    initial={{x:-300}}
    animate={{x:0}}
    exit={{x:-300}}
    transition={{duration:0.3}}
    className='lg:hidden fixed w-72 h-full left-0 top-0 bg-gray-800/90  z-50 border-b border-gray-700 '>
<div className="flex justify-between items-center mb-6">
    <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
     <button className="" onClick={()=>setOpenManu(false)} ><AiOutlineClose size={25}></AiOutlineClose></button>
</div>
<div className="flex flex-col gap-3">
    {
        menu.map((item)=>(
                <button key={item.id}
                onClick={()=>setActivePage(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm ${activePage === item.id ? "bg-blue-600 text-white" : "bg-gray-800 hover:bg-blue-700"}`} >
                {item.icon}
                <span>{item.label}</span>

            </button>
        ))
    }
</div>
    </motion.div>)}

</AnimatePresence>

        </div>
    );
};

export default AdminDashboard;