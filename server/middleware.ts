import { Hono } from "hono";
import { DEFAULT_SIGN_IN_REDIRECT, DEFAULT_SIGN_OUT_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } from "@/routes";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

const app = new Hono();

app.all("*", async (c) => {
  const session = await auth();

  const pathname = new URL(c.req.url).pathname;
  const isAuthenticated = !!session?.user;

  const isApiAuthRoute = apiAuthPrefix.some((route) => pathname.startsWith(route));
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  if (isApiAuthRoute) return NextResponse.next();

  if (isAuthRoute) {
    if (isAuthenticated) {
      return Response.redirect(new URL(DEFAULT_SIGN_IN_REDIRECT, c.req.url));
    }
    return NextResponse.next();
  }

  if (!isAuthenticated && !isPublicRoute) {
    return Response.redirect(new URL(DEFAULT_SIGN_OUT_REDIRECT, c.req.url));
  }

  return NextResponse.next();
});

export default app;
