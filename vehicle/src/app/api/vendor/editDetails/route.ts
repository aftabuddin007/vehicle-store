import { auth } from "@/auth";
import connectDb from "@/lib/connectDB";
import User from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try{
        await connectDb()
        const {shopName,shopAddress} = await req.json()
        const session = await auth()
        if(!session?.user?.email){
            return NextResponse.json({
                message:"Anauthorized Access"
            },{status:401})
        }
        const user = await User.findOneAndUpdate({email:session?.user?.email},{
            shopName,shopAddress,verificationStatus:"pending",
            requestAt: new Date(),
        },{new:true})
        if(!user){
            return NextResponse.json({
                message:"user is not found"
            },{status:404})
        }
        return NextResponse.json({
            message:"Shop details updated successfully",user
        },{status:200})
    }
    catch(err){
        console.log(err);
    }
}