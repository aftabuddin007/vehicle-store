import connectDb from "@/lib/connectDB";
import User from "@/model/user.model";
import { NextResponse } from "next/server";

export async function GET() {
    try{
       await connectDb() 
       const venders = await User.find({role:"vendor"}).sort({createdAt:-1})
       if(!venders){
        return new Response(JSON.stringify({message:"No venders found"}),{status:404})
       }
       return NextResponse.json({venders},{status:200})
    }
    catch(err){
        return NextResponse.json({message:`get all vendors error ${err}`},{status:500})
    }
}