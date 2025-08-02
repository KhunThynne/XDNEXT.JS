import createMiddleware from "next-intl/middleware";
import { routing } from "./libs/i18n/routing";
// import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";
const handleI18nRouting = createMiddleware(routing);
export default auth(async (req) => {
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    // return NextResponse.rewrite(new URL("/about-2", req.url));
  }
  const response = handleI18nRouting(req);
  if (response) return response;
});

// export default async function middleware(req: NextRequest) {

//   const response = handleI18nRouting(req);
//   return response;
// }

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
