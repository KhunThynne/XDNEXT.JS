import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XD Shop",
  description: "contact",
};

export default async function ContactLayout({ children }: WithChildren) {
  return <section className="mx-auto my-6 size-full grow">{children}</section>;
}
