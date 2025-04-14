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

import { usePathname } from "next/navigation";

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
      submenu: [
        {
          title: "Fumzy Lagos",
          url: "/product/fumzyLagos",
          img: "/assets/fumzy_lagos_logo.png",
        },
        {
          title: "Herbton",
          url: "/product/herbton",
          img: "/assets/herbton_logo.png",
        },
      ],
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

  const path = usePathname();

  console.log("path name: ", path);

  const router = useRouter();

  return (
    <div className="relative z-50 flex items-center justify-between w-full p-4 border">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={"/assets/GNHL_logo.svg"}
          alt={"Herbton Logo"}
          height={1000}
          width={1000}
          className=" h-[90px] pl-4 w-fit"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden gap-2 lg:flex">
        {menuItem.map((item, i) => (
          <div key={i} className="relative group">
            <Link href={item.url}>
              <Button
                onClick={() => router.push(item.url)}
                className={`text-xl rounded-none text-[#034401]   ${
                  path.includes(item.url) &&
                  "bg-primary skew-x-12 text-secondary"
                }`}
                variant={"ghost"}
              >
                {item.title}
              </Button>
            </Link>
            {item.submenu && (
              <div className="absolute hidden w-[300px] bg-white border rounded-md shadow-lg group-hover:block">
                {item.submenu.map((subitem, j) => (
                  <Link href={subitem.url} key={j}>
                    <RippleEffect className="p-2 py-4 text-lg flex gap-2 px-4  font-semibold whitespace-nowrap text-[#034401] hover:bg-gray-100">
                      <Image
                        src={subitem.img}
                        alt={subitem.title}
                        height={1000}
                        width={1000}
                        className="h-[30px] w-fit rounded-full border"
                      />
                      {subitem.title}
                    </RippleEffect>
                  </Link>
                ))}
              </div>
            )}
          </div>
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
            <div className="z-50 flex flex-col p-4">
              {menuItem.map((item, i) => (
                <Link href={item.url} key={i}>
                  <RippleEffect className="w-full p-4 text-xl text-[#034401]  font-['PoorRichard'] border-b">
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
