"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

// import { GiHamburgerMenu } from "react-icons/gi";
// import { ListMinusIcon } from "lucide-react";
import { HiMenuAlt2 } from "react-icons/hi";
import { RippleEffect } from "../ui/RippleEffect";

// Assuming you're using Heroicons for the hamburger icon

const NavBar = () => {
  const menuItem = [
    {
      title: "Our Story",
      url: "/aboutUs",
    },
    {
      title: "Products",
      url: "/product",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Distributors",
      url: "/distributors",
    },
    {
      title: "Leadership",
      url: "/leadership",
    },
  ];

  const router = useRouter();

  return (
    <div className="flex items-center justify-between w-full p-4 border">
      {/* Logo */}
      <Image
        src={"/assets/Herbton_logo.svg"}
        alt={"Herbton Logo"}
        height={1000}
        width={1000}
        className=" h-[60px] w-fit"
      />

      {/* Desktop Menu */}
      <div className="hidden gap-2 lg:flex">
        {menuItem.map((item, i) => (
          <Link href={item.url} key={i}>
            <Button
              onClick={() => router.push(item.url)}
              className="text-xl"
              variant={"ghost"}
            >
              {item.title}
            </Button>
          </Link>
        ))}
      </div>

      {/* Mobile/Tablet Menu (Hamburger) */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <div>
              <HiMenuAlt2 className="w-8 h-8 " />
            </div>
            {/* <GiHamburgerMenu className="w-8 h-8" /> */}
          </SheetTrigger>

          <SheetContent side="right">
            {/* Header of the Sheet */}
            <SheetHeader>
              <SheetTitle className="text-xl">
                <Image
                  src={"/assets/Herbton_logo.svg"}
                  alt={"Herbton Logo"}
                  height={1000}
                  width={1000}
                  className="w-auto h-[30px]"
                />
              </SheetTitle>
            </SheetHeader>

            {/* Menu Items in the Sheet */}
            <div className="flex flex-col p-4">
              {menuItem.map((item, i) => (
                <Link href={item.url} key={i}>
                  <RippleEffect className="w-full p-4 text-xl  font-['PoorRichard'] border-b">
                    {item.title}
                  </RippleEffect>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
