"use client";
import { Separator } from "@/libs/shadcn/ui/separator";
import { Link } from "@navigation";
import clsx from "clsx";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Footer({ className }: WithlDefaultProps) {
  return (
    <footer
      className={clsx(
        "border-t-1 bg-background @container w-full items-center",
        "text-xs",
        "space-y-3",
        className
      )}
    >
      <div className="mx-auto flex max-w-screen-lg flex-wrap gap-8 py-3">
        <div className="lg:flex-2 max-lg:w-full">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-foreground text-lg font-bold">XDShope</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Your trusted marketplace for premium game scripts and automation
            tools.
          </p>
        </div>
        <div className="grow">
          <h4 className="text-foreground mb-4 font-semibold">Products</h4>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                Scripts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                Mods
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                Tools
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                Bundles
              </a>
            </li>
          </ul>
        </div>
        <div className="grow">
          <h4 className="text-foreground mb-4 font-semibold">Support</h4>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                Community
              </a>
            </li>
          </ul>
        </div>
        <div className="grow">
          <h4 className="text-foreground mb-4 font-semibold">Company</h4>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
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
