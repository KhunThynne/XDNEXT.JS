import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { routing } from "./libs/i18n/routing";

const handleI18nRouting = createMiddleware(routing);
export default async function proxy(request: NextRequest) {
  const { nextUrl } = request;
  const response = handleI18nRouting(request) ?? NextResponse.next();
  response.headers.set("x-url", nextUrl.pathname + nextUrl.search);
  if (response) return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/admin`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|admin|trpc|_next|_vercel|.*\\..*).*)"],
};
