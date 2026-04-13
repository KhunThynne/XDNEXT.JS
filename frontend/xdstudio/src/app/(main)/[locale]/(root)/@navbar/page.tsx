import { auth } from "@/auth";
import Navbar from "./components";
import MenuNavbar from "./components/MenuNavbar";
import conf from "@/utils/loadConfig";
import { RenderLink } from "./components/RenderLink.components";
import { NavbarActionSection } from "./components/NavbarActionSection";
import Link from "next/link";
import { QueryClient } from "@tanstack/react-query";
import { userQueries } from "@/shared/core/user";

export default async function PageNavBar() {
  const session = await auth();
  const queryClient = new QueryClient();
  let creditData = null;
  if (session?.user?.id) {
    creditData = await queryClient.fetchQuery(
      userQueries.credit(session.user.id)
    );
  }
  return (
    <Navbar session={session} brander={conf.branner}>
      <Link href="/" key={conf.branner} className="text-xl font-bold">
        {conf.branner}
      </Link>
      <div className="hidden items-center gap-6 md:flex">
        <RenderLink render={conf.navbar} />
        <NavbarActionSection
          className="flex gap-2"
          session={session}
          credit={creditData?.credit}
        />
      </div>
      <MenuNavbar navbar={conf.navbar} session={session!} />
    </Navbar>
  );
}
