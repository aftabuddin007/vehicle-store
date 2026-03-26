import { NextResponse, type NextRequest } from 'next/server'
 
export function proxy(req: NextRequest) {
    const {pathname}=req.nextUrl
    // console.log(pathname);
    const publicRoute = ["/login","/register","/api/auth","/favicon.ico","/_next"]
if(publicRoute.some((path)=>pathname.startsWith(path))){
    return NextResponse.next()
}



}
 

