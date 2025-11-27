import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';

// DEFINIERE DAS ÖFFENTLICHE FELD
const isPublicRoute = createRouteMatcher(['/sign-in', '/sign-up']);

// INITIIERE AUTH-STEUERUNG MIT AKTIVEM ASYNC HANDLER
export default clerkMiddleware(async (auth, req) => {
    const { userId } = await auth(); // **FIX: ASYNC & AWAIT**
    const url = req.nextUrl;

    // 1. ZWANGS-REDIRECT (Ungeloggt auf geschützter Route '/')
    if (!userId && !isPublicRoute(req)) {
        const signInUrl = new URL('/sign-in', url.origin);
        signInUrl.searchParams.set('redirect_url', url.pathname); 
        return NextResponse.redirect(signInUrl);
    }
    
    // 2. RÜCKKEHR-REDIRECT (Eingeloggt auf Auth-Seite /sign-in)
    if (userId && isPublicRoute(req)) {
        const homeUrl = new URL('/', url.origin);
        return NextResponse.redirect(homeUrl);
    }

    return NextResponse.next();
});

// WENDET DEN WÄCHTER AUF ALLE STREAMS AN (Der Feld-Filter)
export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};
