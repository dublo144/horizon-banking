"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { User } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = { user: User };

export default function Sidebar({ user }: Props) {
  const pathName = usePathname();

  return (
    <section className="main-sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href={"/"}
          className="flex mb-12 cursor-pointer items-center gap-2"
        >
          <Image
            src={"/icons/logo.svg"}
            width={34}
            height={34}
            alt="logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="main-sidebar-logo">Horizon Bank</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const itemIsActive =
            pathName === item.route || pathName.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("main-sidebar-link", {
                "bg-bank-gradient": itemIsActive,
              })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": itemIsActive })}
                />
              </div>
              <p
                className={cn("main-sidebar-label", {
                  "!text-white": itemIsActive,
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      FOOTER
    </section>
  );
}
