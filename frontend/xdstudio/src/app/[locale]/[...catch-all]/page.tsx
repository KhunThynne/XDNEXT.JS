import { Metadata } from "next";
import { notFound } from "next/navigation";
export const metadata: Metadata = {
  title: "404-Notfound",
  description: "This is a static description for all locales",
};
export default function Default() {
  return notFound();
}
