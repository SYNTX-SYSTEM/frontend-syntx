import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function handleRootRedirect(req: NextRequest) {
  const { userId } = getAuth(req);
  const url = req.nextUrl;

  if (!userId && url.pathname === "/") {
    url.pathname = "/sign-in";
    return NextResponse.redirect(url);
  }

  if (userId && url.pathname === "/sign-in") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
