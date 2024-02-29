"use client";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { MenuLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu-base";
import Image from "next/image";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed inset-x-0 top-10 z-30 mx-auto", className)}
      style={{ minWidth: "auto", maxWidth: "fit-content" }}
    >
      <Menu setActive={setActive}>
        <MenuLink href="/">
          <Image src="/logo.svg" width={65} height={65} alt=""></Image>
        </MenuLink>

        <MenuLink href="/opportunities">Opportunities</MenuLink>
        <MenuLink href="/habits">Habits</MenuLink>
        <MenuLink href="/donate">Donate</MenuLink>
        <MenuLink href="/FAQ">FAQ</MenuLink>

        <MenuItem active={active} item="This Site" setActive={setActive}>
          <MenuLink href="/information">About Us / Information</MenuLink>
          <MenuLink href="/webdesign" className="mt-2">
            Web Design
          </MenuLink>
          <MenuLink href="/interface" className="mt-2">
            Interface
          </MenuLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
