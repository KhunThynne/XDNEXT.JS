import createMiddleware from "next-intl/middleware";
import { routing } from "./libs/i18n/routing";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
const handleI18nRouting = createMiddleware(routing);
export default async function proxy(request: NextRequest) {
  const { nextUrl } = request;
  const response = handleI18nRouting(request) ?? NextResponse.next();
  response.headers.set("x-url", nextUrl.pathname + nextUrl.search);
  if (response) return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
