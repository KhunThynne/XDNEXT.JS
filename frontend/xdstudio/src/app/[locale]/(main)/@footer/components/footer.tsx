"use client";
import { Separator } from "@/libs/shadcn/ui/separator";
import { Link } from "@navigation";
import clsx from "clsx";
import { CheckCircle } from "lucide-react";
import { useNow } from "next-intl";
import Image from "next/image";

export default function Footer({ className }: WithlDefaultProps) {
  const intl = useNow();
  const currentYear = new Date(intl).getFullYear();
  const createdYear = 2025;
  return (
    <article
      className={clsx(
        "@container w-full items-center bg-background max-sm:pb-7",
        "text-xs",
        "space-y-3",
        className
      )}
    >
      <div className="mx-auto flex max-w-screen-lg flex-wrap gap-8 py-3">
        <div className="max-lg:w-full lg:flex-2">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">XDShope</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Your trusted marketplace for premium game scripts and automation
            tools.
          </p>
        </div>
        <div className="grow">
          <p className="mb-4 font-semibold text-foreground">Products</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#" className="transition-colors hover:text-foreground">
                Scripts
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-foreground">
                Mods
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-foreground">
                Tools
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-foreground">
                Bundles
              </a>
            </li>
          </ul>
        </div>
        <div className="grow">
          <p className="mb-4 font-semibold text-foreground">Support</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#" className="transition-colors hover:text-foreground">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-foreground">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-foreground">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-foreground">
                Community
              </a>
            </li>
          </ul>
        </div>
        <div className="grow">
          <p className="mb-4 font-semibold text-foreground">Company</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#" className="transition-colors hover:text-foreground">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-foreground">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-foreground">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-foreground">
                Developers
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto flex max-w-screen-lg flex-wrap items-center justify-between gap-3 max-sm:flex-col">
        <Separator className="opacity-50" />
        <div className="flex items-center">
          <Image
            className="mx-auto rounded-full border-1"
            width={44}
            height={44}
            alt=""
            src="/img/XD_STUDIO.png"
          />

          <div className="ml-2 border-l-1">
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

        <div className="space-y-1 sm:self-end">
          <div>
            Copyright &copy; XD DEV {`${createdYear}`}{" "}
            {createdYear < currentYear && `- ${currentYear}`} All
            Rights Reserved.
          </div>
          <div className="flex items-center justify-center gap-1 sm:justify-start">
            <CheckCircle className="size-4" /> Website
            <span className="font-medium text-success">Protected</span>
          </div>
        </div>
      </div>
    </article>
  );
}
