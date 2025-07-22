import { Metadata } from "next";
import { notFound } from "next/navigation";
export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "404-Notfound",
  description: "This is a static description for all locales",
};
export default function PageCatchAll() {
  return notFound();
}
