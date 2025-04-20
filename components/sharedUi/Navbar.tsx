"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter, usePathname } from "next/navigation";
import { HiMenuAlt2 } from "react-icons/hi";
import { ChevronDownIcon } from "lucide-react";
import { RippleEffect } from "../ui/RippleEffect";

const NavBar = () => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const path = usePathname();
  const router = useRouter();

  const menuItem = [
    {
      title: "Our Story",
      url: "/aboutUs",
    },
    {
      title: "Products",
      url: "#",
      submenu: [
        {
          title: "Herbton",
          url: "/product/herbton",
          img: "/assets/herbton_logo.png",
        },
        {
          title: "Fumzy Lagos",
          url: "/product/fumzyLagos",
          img: "/assets/fumzy_lagos_logo.png",
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

  return (
    <div className="relative z-50 flex items-center justify-between w-full p-4 border">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={"/assets/GNHL_logo.svg"}
          alt={"Herbton Logo"}
          height={1000}
          width={1000}
          className="h-[90px] pl-4 w-fit"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden gap-2 lg:flex">
        {menuItem.map((item, i) => (
          <div key={i} className="relative group">
            <Link href={item.url}>
              <Button
                onClick={() => router.push(item.url)}
                className={`text-xl rounded-none text-[#034401] ${
                  path.includes(item.url) &&
                  "bg-primary skew-x-12 text-secondary"
                }`}
                variant={"ghost"}
              >
                {item.title}
                {item?.submenu && <ChevronDownIcon className="w-4 h-4 ml-2" />}
              </Button>
            </Link>

            {/* Desktop submenu */}
            {item.submenu && (
              <div className="absolute hidden w-[300px] bg-white border rounded-md shadow-lg group-hover:block overflow-hidden">
                {item.submenu.map((subitem, j) => (
                  <Link href={subitem.url} key={j}>
                    <RippleEffect className="p-2 py-4 text-lg flex gap-2 px-4 font-semibold whitespace-nowrap text-[#034401] hover:bg-gray-100">
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

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <div>
              <HiMenuAlt2 className="w-8 h-8" />
            </div>
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="text-xl">
                <Image
                  src={"/assets/GNHL_logo.svg"}
                  alt={"Herbton Logo"}
                  height={1000}
                  width={1000}
                  className="w-auto h-[30px]"
                />
              </SheetTitle>
            </SheetHeader>

            <div className="z-50 flex flex-col gap-2 p-4 overflow-hidden">
              {menuItem.map((item, i) => (
                <div key={i}>
                  {!item.submenu ? (
                    <Link href={item.url}>
                      <RippleEffect className="w-full p-4 text-xl font-semibold text-[#034401] border-b">
                        {item.title}
                      </RippleEffect>
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() =>
                          setOpenSubmenu(
                            openSubmenu === item.title ? null : item.title
                          )
                        }
                        className="w-full p-4 text-xl text-left font-semibold text-[#034401]  border-b flex items-center justify-between"
                      >
                        {item.title}
                        <ChevronDownIcon className="w-4 h-4 ml-2" />
                      </button>

                      {openSubmenu === item.title && (
                        <div className="py-2 pl-4">
                          {item.submenu.map((subitem, j) => (
                            <Link href={subitem.url} key={j}>
                              <RippleEffect className="flex gap-2 items-center  border-b p-2 text-[#034401] hover:bg-gray-100 ">
                                <Image
                                  src={subitem.img}
                                  alt={subitem.title}
                                  height={30}
                                  width={30}
                                  className="h-[30px] w-[30px] rounded-full border"
                                />
                                <span className="text-lg font-semibold ">
                                  {subitem.title}
                                </span>
                              </RippleEffect>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
