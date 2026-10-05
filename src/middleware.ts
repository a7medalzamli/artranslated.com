import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  try {
    return await updateSession(request);
  } catch {
    // If Supabase env is missing/misconfigured, don't 500 the whole admin area;
    // send to login (the server-side layout still enforces auth).
    if (request.nextUrl.pathname !== "/admin/login") {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }
}

export const config = {
  // Only run on admin routes: the public site needs no session and must keep
  // working even if Supabase env vars are absent.
  matcher: ["/admin/:path*"],
};
