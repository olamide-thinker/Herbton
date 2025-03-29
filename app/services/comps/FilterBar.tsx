"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoFilter } from "react-icons/io5";
import { Button } from "@/components/ui/button";

export const FilterBar = () => {
  const [isHidden, setIsHidden] = React.useState(false);

  return (
    <div className="p-2 space-y-2 border-r">
      <Button
        variant={"secondary"}
        size={"sm"}
        onClick={() => setIsHidden(!isHidden)}
      >
        <IoFilter /> Filter
      </Button>
      <div className={`${isHidden && "hidden"} mt-6`}>
        <p className="text-xs italic whitespace-nowrap text-muted-foreground">
          Filter products by:
        </p>
        <Tabs
          defaultValue="ailment"
          className="w-[250px] 
          "
        >
          <TabsList className="mb-4 bg-none">
            <TabsTrigger value="ailment">Ailment Type</TabsTrigger>
            <TabsTrigger value="content">Potent Content</TabsTrigger>
          </TabsList>
          <TabsContent value="ailment">
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 15 }).map((_, i) => (
                <Button
                  className="text-base rounded-full shadow-none border-primary/10 hover:bg-secondary"
                  variant={"outline"}
                  key={i}
                >
                  Ailment-{i}
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="content">
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 15 }).map((_, i) => (
                <Button
                  className="text-base rounded-full shadow-none border-primary/10 hover:bg-secondary"
                  variant={"outline"}
                  key={i}
                >
                  Content-{i}
                </Button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
