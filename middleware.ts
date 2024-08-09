import { NextRequest, NextResponse } from "next/server";

export const protectedRoutes = ["/"];
export const authRoutes = ["/auth"];

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get("token")?.value as string;
  if (token) {
    if (authRoutes.includes(req.nextUrl.pathname))
      return NextResponse.redirect(new URL("/", req.url));
  } else if (protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }
};
