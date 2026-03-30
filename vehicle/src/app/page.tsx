import { auth } from '@/auth';
import AdminDashboard from '@/component/Admin/AdminDashboard';
import EditRoleAndPhone from '@/component/EditRoleAndPhone';
import Footer from '@/component/Footer';
import Navbar from '@/component/Navbar';
import UserDashboard from '@/component/User/UserDashboard';
import VendorDashboard from '@/component/Vendor/VendorDashboard';
import connectDb from '@/lib/connectDB';
import User from '@/model/user.model';
import { redirect } from 'next/navigation';
import React from 'react';

const Home = async () => {
  await connectDb()
  const session = await auth()
  const user = await User.findById(session?.user?.id)
  if(!user){
    redirect("/login")
  }

const inComplete = !user.role || !user.phone || (!user.phone && user.role == "user")

if(inComplete){
  return <EditRoleAndPhone></EditRoleAndPhone>
}

const plainUser = JSON.parse(JSON.stringify(user))

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 '>
      <Navbar user={plainUser}></Navbar>
    {user?.role == "user" ? (<UserDashboard></UserDashboard>):user?.role == "vendor" ? (<VendorDashboard></VendorDashboard>) :(<AdminDashboard></AdminDashboard>)}
    <Footer></Footer>
    </div>
  );
};

export default Home;