/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoFilter } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { debounce } from "lodash";

type Props = {
  FilterByTreatmentArray: any[];
  FilterByContentArray: any[];
  onSelectionChange: (
    selectedAilments: string[],
    selectedIngredients: string[]
  ) => void;
};

export const FilterBar = ({
  FilterByTreatmentArray,
  FilterByContentArray,
  onSelectionChange,
}: Props) => {
  const [isHidden, setIsHidden] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedAilments, setSelectedAilments] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const ailments = FilterByTreatmentArray || [];
  const ingredients = FilterByContentArray || [];

  // Optimized filtering function
  const filterItems = (items: string[], query: string) => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  };

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      setSearchQuery(query);
    }, 300),
    []
  );

  // Handle checkbox changes for ingredients
  const handleIngredientChange = (item: string) => {
    setSelectedIngredients((prevSelectedIngredients) => {
      const newSelectedIngredients = prevSelectedIngredients.includes(item)
        ? prevSelectedIngredients.filter(
            (ingredient) => ingredient.toLowerCase() !== item.toLowerCase()
          )
        : [...prevSelectedIngredients, item];

      // Notify parent of the selected ingredients
      onSelectionChange(selectedAilments, newSelectedIngredients);
      return newSelectedIngredients;
    });
  };

  // Handle ailment selection - Deselect if already selected, else select
  const handleAilmentSelect = (item: string) => {
    setSelectedAilments((prevSelectedAilments) => {
      // If the item is already selected, deselect it and reset the search query
      if (prevSelectedAilments.includes(item)) {
        setSearchQuery(""); // Reset the search query to show the full list
        onSelectionChange([], selectedIngredients); // Notify parent of deselection
        return []; // Deselect all ailments
      } else {
        onSelectionChange([item], selectedIngredients); // Notify parent of selection
        return [item]; // Select the clicked item
      }
    });
  };

  return (
    <div
      className={`p-2 space-y-4 border-r w-fit h-fit-content ${
        isHidden ? " sm:w-fit" : " sm:w-[250px]"
      }`}
    >
      <Button
        variant={"secondary"}
        size={"sm"}
        onClick={() => setIsHidden(!isHidden)}
        className="flex items-center gap-2"
      >
        <IoFilter /> Filter
      </Button>

      <div className={`${isHidden ? "hidden" : "block"} mt-4`}>
        <p className="text-xs italic whitespace-nowrap text-muted-foreground">
          Filter products by:
        </p>

        <Tabs defaultValue="ailment" className="w-full">
          <TabsList className="flex justify-start gap-4 mb-4 bg-none">
            <TabsTrigger value="ailment" className="text-sm">
              Ailment Type
            </TabsTrigger>
            <TabsTrigger value="ingredient" className="text-sm">
              Ingredient
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ailment">
            <input
              type="text"
              placeholder="Search ailments..."
              className="w-full p-2 mb-4 border rounded"
              onChange={(e) => debouncedSearch(e.target.value)}
            />
            <div className="flex flex-col w-full overflow-auto max-h-[250px] sm:max-h-[400px]">
              {filterItems(ailments, searchQuery).map((item, i) => (
                <div
                  key={i}
                  className={`w-full p-4 text-base text-left border-none rounded-none shadow-none cursor-pointer border-primary/10 hover:bg-secondary ${
                    selectedAilments.includes(item) ? "bg-blue-200" : ""
                  }`}
                  onClick={() => handleAilmentSelect(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ingredient">
            <input
              type="text"
              placeholder="Search ingredients..."
              className="w-full p-2 mb-4 border rounded"
              onChange={(e) => debouncedSearch(e.target.value)}
            />
            <div className="flex flex-col w-full overflow-auto max-h-[250px] sm:max-h-[400px]">
              {filterItems(ingredients, searchQuery).map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleIngredientChange(item)}
                  className="flex items-center space-x-2 w-full p-4 text-base text-left border-none rounded-none shadow-none cursor-pointer border-primary/10 hover:bg-secondary"
                >
                  <Checkbox
                    id={item}
                    checked={selectedIngredients.includes(item)}
                    onChange={() => handleIngredientChange(item)}
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
