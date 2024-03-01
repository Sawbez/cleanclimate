"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";
import { Menu, MenuItem, MenuLink } from "../ui/navbar-menu-base";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed inset-x-0 top-10 z-30 m-0 max-w-[100vw] md:mx-auto md:max-w-[45rem]", className)}
      style={{ minWidth: "auto" }}
    >
      <Menu setActive={setActive}>
        <MenuLink href="/">
          <Image src="/logo.svg" width={65} height={65} alt="CleanClimate logo"></Image>
        </MenuLink>

        <MenuLink href="/opportunities">Opportunities</MenuLink>
        <MenuLink href="/donate">Donate</MenuLink>
        <MenuLink href="/FAQ">FAQ</MenuLink>

        <MenuItem active={active} item="This Site" setActive={setActive}>
          <MenuLink href="/information">About Us & Information</MenuLink>
          <MenuLink href="/tsa" className="mt-2">
            Sources, Work Logs, & Copyright
          </MenuLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
