import { NextResponse } from 'next/server';

// Check auth from server side here
export function middleware() {
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/((?!api|static|_next/static|_next/images|svgIcon|svg|logo|lottie|styles-antd|locales|/_next/data|robots.txt|public|images|manifest.json|sw.js|favicon.ico|workbox-*).*)',
    '/',
  ],
};
