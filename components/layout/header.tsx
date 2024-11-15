"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import MobileHeader from "./mobile-header";
import ReapsLogo from "../icons/reaps-logo";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const nav_links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Pricing",
    link: "#pricing",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white border-b  w-screen">
      <header className=" mx-auto my-auto flex min-h-[80px] w-full max-w-[1600px] items-stretch justify-between  px-4 lg:px-16">
        <div className="flex items-center">
          <Link href={`/`}>
            <ReapsLogo />
          </Link>
        </div>
        <nav className="hidden items-center justify-center gap-x-8 lg:flex scroll-smooth">
          {nav_links.map((link, index) => (
            <React.Fragment key={index}>
              <Link
                href={link.link}
                className="text-gray-700 hover:text-gray-900 font-light relative flex h-full flex-col items-center justify-center text-base transition duration-300"
              >
                <span>{link.name}</span>
                {pathname.endsWith(link.link) && (
                  <div className="bg-primary absolute bottom-0 h-[4px] w-full rounded-full" />
                )}
              </Link>
              {index < nav_links.length - 1 && (
                <div className="bg-gray-600 h-1 w-1 rounded-full" />
              )}
            </React.Fragment>
          ))}
        </nav>
        <span className="hidden w-fit items-center justify-center gap-5 md:flex">
          <Link
            className={cn(buttonVariants({ variant: "primary", size: "md" }))}
            href={`/`}
          >
            Get started
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline", size: "md" }))}
            href={`/`}
          >
            Try Demo
          </Link>
        </span>
        <div className="flex items-center lg:hidden">
          <MobileHeader />
        </div>
      </header>
    </div>
  );
};

export default Header;
