import { auth } from "@/auth";
import Navbar from "./components";

export default async function PageNavBar() {
  const session = await auth();
  return <Navbar session={session} />;
}
