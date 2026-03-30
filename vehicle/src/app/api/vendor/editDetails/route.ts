import connectDb from "@/lib/connectDB";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest) {
    try{
        await connectDb()
        const {shopName,shopAddress} = await req.json()
        
    }
    catch(err){
        console.log(err);
    }
}