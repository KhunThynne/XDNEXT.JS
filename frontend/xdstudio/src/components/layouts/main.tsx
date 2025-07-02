import clsx from "clsx";
import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Content from "./content";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className={clsx("flex flex-col", "h-screen")}>
      <Navbar />
      <Content
        classNames={{
          outsite: "grow relative",
          content: "container mx-auto p-5 h-full ",
        }}
      >
        {children}
      </Content>
      <Footer className="flex-none p-5" />
    </main>
  );
}
