"use client";

import { usePathname } from "next/navigation";

export default function BackgroundWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const backgroundColor =
    pathname === "/try/institution/register" ? "#0C1534" : "white";

  return (
    <div
      style={{ backgroundColor }}
      className="relative mx-auto min-w-full min-h-screen"
    >
      {children}
    </div>
  );
}
