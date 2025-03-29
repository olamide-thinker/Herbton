"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoFilter } from "react-icons/io5";
import { Button } from "@/components/ui/button";

export const FilterBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Sample items for Ailment and Content
  const ailments = Array.from({ length: 15 }, (_, i) => `Ailment-${i}`);
  const contents = Array.from({ length: 15 }, (_, i) => `Content-${i}`);

  // Filter function to filter items based on search query
  const filterItems = (items: string[], query: string) => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div
      className={`p-2 space-y-4 border-r  w-fit h-fit-content ${
        isHidden ? " sm:w-fit" : " sm:w-[250px]"
      }`}
    >
      {/* Filter Toggle Button */}
      <Button
        variant={"secondary"}
        size={"sm"}
        onClick={() => setIsHidden(!isHidden)}
        className="flex items-center gap-2"
      >
        <IoFilter /> Filter
      </Button>

      {/* Filter Options */}
      <div className={`${isHidden ? "hidden" : "block"} mt-4`}>
        <p className="text-xs italic whitespace-nowrap text-muted-foreground">
          Filter products by:
        </p>

        {/* Tabs for Ailment and Content */}
        <Tabs defaultValue="ailment" className="w-full">
          <TabsList className="flex justify-start gap-4 mb-4 bg-none">
            <TabsTrigger value="ailment" className="text-sm">
              Ailment Type
            </TabsTrigger>
            <TabsTrigger value="content" className="text-sm">
              Potent Content
            </TabsTrigger>
          </TabsList>

          {/* Ailment Type Tab Content */}
          <TabsContent value="ailment">
            <div>
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search ailments..."
                className="w-full p-2 mb-4 border rounded"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* Ailment Buttons */}
              <div className="flex flex-col  w-full  overflow-auto max-h-[250px] sm:max-h-[400px]">
                {filterItems(ailments, searchQuery).map((item, i) => (
                  <div
                    className="w-full p-4 text-base text-left border-none rounded-none shadow-none cursor-pointer border-primary/10 hover:bg-secondary"
                    key={i}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Potent Content Tab Content */}
          <TabsContent value="content">
            <div>
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search contents..."
                className="w-full p-2 mb-4 border rounded"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* Content Buttons */}
              <div className="flex flex-wrap gap-2 overflow-auto max-h-[250px] sm:max-h-[300px]">
                {filterItems(contents, searchQuery).map((item, i) => (
                  <Button
                    className="text-base rounded-full shadow-none border-primary/10 hover:bg-secondary"
                    variant={"outline"}
                    key={i}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
