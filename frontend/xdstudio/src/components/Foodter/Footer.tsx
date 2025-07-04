import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = object;

export default function Footer({}: Props) {
  const t = useTranslations();
  return (
    <div className="border-t-1 absolute bottom-0 w-full items-center border-t-[#6b2c2c] bg-[#180000f8] p-5">
      <div className="container mx-auto flex max-w-5xl justify-between text-[12px]">
        <div className="hidden items-center text-white md:flex">
          <div>
            <Image
              className="border-1 rounded-full border-[#f8f8f8]"
              width={44}
              height={44}
              alt=""
              src="/img/XD_STUDIO.png"
            />
          </div>
          <div className="border-l-1 ml-2 text-white">
            <div className="ml-2 space-x-1">
              <span>This</span>
              <code className="space-x-1 font-extralight text-[#f37601]">
                <span>XD</span>
                <span>TECH</span>
              </code>
              {t("Footer.Application Made by")}
              <Link
                className="mx-1 text-[#fa7e7e]"
                href="https://discord.xd-tect.com/"
              >
                XD TECHNOLOGY
              </Link>
            </div>
            <div className="ml-2">version 0.0.1 (Latest version)</div>
          </div>
        </div>

        <div className="flex flex-col text-white">
          <div>Copyright &copy; XD DEV 2024 - 2025 All Rights Reserved.</div>
          <div className="flex items-center justify-center gap-1 md:justify-start">
            <CheckCircle /> Website{" "}
            <code className="font-extrabold text-green-400">Protected</code>
          </div>
        </div>
      </div>
    </div>
  );
}
