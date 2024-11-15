'use client';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import ReapsLogo from '../icons/reaps-logo';

const nav_links = [
  {
    name: 'Features',
    link: '/',
  },
  {
    name: 'Support',
    link: '/',
  },
  {
    name: 'Pricing',
    link: '/',
  },
];

const MobileHeader = () => {
  return (
    <header className="w-full">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="">
          <SheetHeader>
            <div>
              <Link href={`/`}>
                <ReapsLogo />
              </Link>
            </div>
          </SheetHeader>
          <nav className="mt-[6rem] flex flex-col items-start justify-center gap-y-12">
            {nav_links.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="text-gray-600 hover:text-gray-900 text-lg font-bold transition duration-300
            "
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <SheetFooter className="absolute bottom-5">
            <p className="text-gray-800 text-xs font-semibold">
              &copy; Copyright 2024,
              <br />
              Viable Helpers Development Organization
            </p>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileHeader;
