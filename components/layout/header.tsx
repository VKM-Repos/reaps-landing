"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileHeader from "./mobile-header";
import ReapsLogo from "../icons/reaps-logo";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";

const nav_links = [
  {
    name: "Home",
    link: "hero",
  },
  {
    name: "Features",
    link: "features",
  },
  {
    name: "Pricing",
    link: "pricing",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const pathname = usePathname();

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    nav_links.forEach((link) => {
      const section = document.getElementById(link.link);
      if (section) observer.observe(section);
    });

    return () => {
      nav_links.forEach((link) => {
        const section = document.getElementById(link.link);
        if (section) observer.unobserve(section);
      });
    };
  }, [activeSection]);

  return (
    <div
      className={`${
        pathname === "/try/institution/register" ? "hidden" : "block"
      } fixed inset-x-0 top-0 z-50 bg-white border-b w-screen`}
    >
      <header className="mx-auto my-auto flex min-h-[80px] w-full max-w-[1600px] items-stretch justify-between px-4 lg:px-16">
        <div className="flex items-center">
          <Link href={`/`}>
            <ReapsLogo />
          </Link>
        </div>
        <nav className="hidden items-center justify-center gap-x-8 lg:flex scroll-smooth">
          {nav_links.map((link, index) => (
            <React.Fragment key={index}>
              <button
                onClick={() => handleScrollTo(link.link)}
                className={`text-gray-700 hover:text-gray-900 font-light relative flex h-full flex-col items-center justify-center text-base transition duration-300 ${
                  activeSection === link.link ? "text-primary" : ""
                }`}
              >
                <span>{link.name}</span>
                {activeSection === link.link && (
                  <div className="bg-primary absolute bottom-0 h-[4px] w-full rounded-full" />
                )}
              </button>
              {index < nav_links.length - 1 && (
                <div className="bg-gray-600 h-1 w-1 rounded-full" />
              )}
            </React.Fragment>
          ))}
        </nav>
        <span className="hidden w-fit items-center justify-center gap-5 md:flex">
          <Link
            className={cn(buttonVariants({ variant: "primary", size: "md" }))}
            href={`/try/institution/register?bundle=reaps-software`}
          >
            Try for free
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
