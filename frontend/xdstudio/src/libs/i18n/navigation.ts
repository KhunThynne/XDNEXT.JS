import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

const {
  Link: IntlLink,
  redirect: intlRedirect,
  usePathname: intlPathname,
  useRouter: intlRouter,
  getPathname,
} = createNavigation(routing);

export const Link = IntlLink;
export const useRouter = intlRouter;
export const redirect = intlRedirect;
export const usePathname = intlPathname;
export { getPathname };
