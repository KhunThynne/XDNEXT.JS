"use client";
import { useStore, useTestStore } from "@/shared/stores/useNameStore";
import { Link } from "@navigation";
import clsx from "clsx";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Footer({ className }: WithlDefaultProps) {
  const { dataStore } = useStore();
  const { setTest, testStore } = useTestStore();
  return (
    <footer
      className={clsx(
        "border-t-1 bg-background w-full items-center",
        "text-xs",
        className
      )}
    >
      <div className="containermax-sm:flex-col mx-auto flex max-w-screen-lg flex-wrap items-center justify-between gap-3">
        <div className="flex items-center">
          <Image
            className="border-1 mx-auto rounded-full"
            width={44}
            height={44}
            alt=""
            src="/img/XD_STUDIO.png"
          />

          <div className="border-l-1 ml-2">
            <div className="ml-2 space-x-1">
              <span>This</span>
              <code className="space-x-1 font-extralight">
                <span>XD</span>
                <span>TECH</span>
              </code>
              <Link className="mx-1" href="https://discord.xd-tect.com/">
                XD TECHNOLOGY
              </Link>
            </div>
            <div className="ml-2">version 0.0.1 (Latest version)</div>
          </div>
        </div>

        <div className="sm:self-end">
          <div>Copyright &copy; XD DEV 2024 - 2025 All Rights Reserved.</div>
          <div className="flex items-center justify-center gap-1 sm:justify-start">
            <CheckCircle /> Website{" "}
            <code className="font-extrabold text-green-400">Protected</code>
          </div>
        </div>
      </div>
    </footer>
  );
}
