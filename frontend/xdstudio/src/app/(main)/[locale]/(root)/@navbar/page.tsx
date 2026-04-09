import { auth } from "@/auth";
import Navbar from "./components";
import MenuNavbar from "./components/MenuNavbar";
import conf from "@/utils/loadConfig";
import { RenderLink } from "./components/RenderLink.components";
import { NavbarActionSection } from "./components/NavbarActionSection";
import Link from "next/link";

export default async function PageNavBar() {
  const session = await auth();
  return (
    <Navbar session={session} brander={conf.branner}>
      <Link href="/" key={conf.branner} className="text-xl font-bold">
        {conf.branner}
      </Link>
      <div className="hidden items-center gap-6 md:flex">
        <RenderLink render={conf.navbar} />
        <NavbarActionSection className="flex gap-2" session={session} />
      </div>
      <MenuNavbar navbar={conf.navbar} session={session!} />
    </Navbar>
  );
}
