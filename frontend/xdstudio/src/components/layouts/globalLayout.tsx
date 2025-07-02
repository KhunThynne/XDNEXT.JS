import clsx from "clsx";
import { ReactNode } from "react";
import Navbar from "./navbar";

import Footer from "./footer";
import Main from "./main";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={clsx("flex flex-col", "h-screen")}>
      <Navbar />
      <Main
        classNames={{
          outsite: "grow relative",
          main: "container mx-auto p-5 h-full ",
        }}
      >
        {children}
      </Main>
      <Footer className="flex-none p-5" />
    </div>
  );
}
