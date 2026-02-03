import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ['/profile']

export function middleware(request: NextRequest){
  const token = request.cookies.get('token')?.value || localStorage.getItem('token')

  if(protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))){
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/profile/:path']
}