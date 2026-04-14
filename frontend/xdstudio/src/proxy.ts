import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./shared/libs/i18n/routing";
import { auth } from "./auth";
import { signOut } from "./shared/components/forms/auth/actions/Login.action";

const handleI18nRouting = createMiddleware(routing);

export const proxy = auth(async function proxy(request) {
  const { nextUrl } = request;

  // handle invalid user
  const session = request?.auth;
  const isInvalidUser = session && (!session.user || !session.user.id);
  if (isInvalidUser) {
    await signOut({ redirectTo: "/login" });
  }

  // handle i18n routing
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
export default proxy;
