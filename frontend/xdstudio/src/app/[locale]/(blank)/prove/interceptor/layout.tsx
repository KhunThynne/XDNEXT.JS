import { Link } from "@navigation";
import clsx from "clsx";
import type { Metadata } from "next";

export default async function GGLayout({
  children,
  menu,
}: NextJSReactNodes<"menu">) {
  return (
    <>
      <Link href={"test"}>test </Link>
      <section>{menu}</section>
      <section>{children}</section>
    </>
  );
}
