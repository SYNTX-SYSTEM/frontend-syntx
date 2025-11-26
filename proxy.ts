import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// 🚀 PUBLIC ROUTES
const isPublicRoute = createRouteMatcher([
  "/",              // ← HOMEPAGE öffentlich lassen!
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/favicon.ico",
  "/_next(.*)",
  "/public(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // Wenn nicht public → schützen
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // alles matchen außer Dateien
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)",
  ],
};
