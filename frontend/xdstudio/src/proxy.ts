import createMiddleware from "next-intl/middleware";
import { routing } from "./libs/i18n/routing";
// import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default async function proxy(request: NextRequest) {
  const { nextUrl } = request;
  // const hostname = req.headers.get("host");
  // if (hostname?.startsWith("shop.")) {
  //   const newUrl = new URL(`shop`, nextUrl.origin);
  //   return NextResponse.rewrite(newUrl);
  // }
  // if (!request.auth && request.nextUrl.pathname !== "/login") {
  //   // return NextResponse.rewrite(new URL("/about-2", req.url));
  // }
  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request) ?? NextResponse.next();
  response.headers.set("x-url", nextUrl.pathname + nextUrl.search);
  if (response) return response;
}

// export default async function middleware(req: NextRequest) {

//   const response = handleI18nRouting(req);
//   return response;
// }

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: [
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
    "/([\\w-]+)?/users/(.+)",
  ],
};
