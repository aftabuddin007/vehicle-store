import mongoose from "mongoose";

export interface IUser{
    id?: mongoose.Types.ObjectId;
    name:string;
    email:string;
    password?:string;
    phone:string;
    image?:string;
    role:"user"|"vendor"|"admin";
    isApproved?:boolean;
    verificationStatus:"pending"|"approved"|"rejected"
    requestedAt:Date;
    approvedAt:Date;
    rejectedReason?:string;
    vendorProduct?:mongoose.Types.ObjectId[];
    orders?:mongoose.Types.ObjectId[];
    cart?:{
    product:mongoose.Types.ObjectId;
        quantity:number
    }[];
    createdAt?:Date;
    updatedAt?:Date;
    shopName?:string;
    shopAddress?:string;


}




const userSchema =new mongoose.Schema<IUser>({

    name:{
    type:String,
    required:true
},
    email:{
    type:String,
    required:true
},
    password:{
    type:String,
    // required:true
},
image:{
    type:String
},
phone:{
    type:String,
},
role:{
    type:String,
    enum:["user","vendor","admin"],
    default:"user"
},
isApproved:{
    type:Boolean,
    default:false
},
verificationStatus:{
     type:String,
    enum:["pending","approved","rejected"],
    default:"pending"
},
approvedAt:{
    type:Date
},
requestedAt:{
    type:Date
},
shopName:{
    type:String,
},
shopAddress:{
    type:String,
},      
rejectedReason:{
    type:String,

},
vendorProduct:[{
    type:mongoose.Types.ObjectId,
ref:'product'
}
],
orders:[{
    type:mongoose.Types.ObjectId,
ref:'orders'
}
],
cart:[
    {
        product:{
             type:mongoose.Types.ObjectId,
ref:'product'
        },
        quantity:{
            type:Number,
            default:1,
        }
    }
]

},{timestamps:true})

const User =mongoose.models?.User || mongoose.model<IUser>("User",userSchema)
export default User