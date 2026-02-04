import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const email = request.cookies.get('email')?.value;
  const pathname = request.nextUrl.pathname;
  zzzzzzz;
  // Protect dashboard routes - admin only
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      console.log('Middleware - Redirecting to login (no token)');
      return NextResponse.redirect(new URL('/login', request.url));
    }

    if (!email.startsWith('admin')) {
      console.log('Middleware - Redirecting to home (not admin):', email);
      return NextResponse.redirect(new URL('/', request.url));
    }

    console.log('Middleware - Allowing dashboard access');
  }

  // Protect booking form - requires login
  if (pathname.startsWith('/book-form')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/book-form/:path*'],
};
