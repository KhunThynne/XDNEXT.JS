"use client";
import clsx from "clsx";
import { ReactNode } from "react";
import Footer from "./footer";
import Content from "./content";
import Navbar from "./navbar";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className={clsx("flex flex-col", "min-h-screen")}>
      <Navbar />
      <Content
        classNames={{
          outsite: "grow relative bg-secondary-foreground/5 ",
          content: "container   mx-auto py-5  ",
        }}
      >
        {children}
      </Content>
      <Footer className="flex-none px-5 py-3" />
    </main>
  );
}
