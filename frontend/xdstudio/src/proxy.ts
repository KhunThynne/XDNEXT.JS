import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./shared/libs/i18n/routing";
import { auth } from "./auth";

const handleI18nRouting = createMiddleware(routing);
export default auth(async function proxy(request) {
  const { nextUrl, auth: session } = request;

  const hasCookie =
    request.cookies.has("authjs.session-token") ||
    request.cookies.has("__Secure-authjs.session-token");

  if (!session && hasCookie) {
    const response = NextResponse.redirect(nextUrl.href);

    response.cookies.delete("authjs.session-token");
    response.cookies.delete("__Secure-authjs.session-token");
    response.cookies.delete("authjs.csrf-token");

    return response;
  }
  const response = handleI18nRouting(request) ?? NextResponse.next();
  response.headers.set("x-url", nextUrl.pathname + nextUrl.search);
  if (response) return response;
});

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/admin`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|admin|trpc|_next|_vercel|.*\\..*).*)"],
};
