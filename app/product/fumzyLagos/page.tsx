"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IntroSection } from "@/components/sharedUi/IntroSection";
import SecondHero from "@/components/sharedUi/SecondHero";
import React, { useEffect, useMemo, useState } from "react";
import { FilterBar } from "../comps/FilterBar";
import { ProductDetailModal } from "@/components/sharedUi/ProductDetailModal";
import { getSheetData, SheetData, transformSheetData } from "@/lib/getSheet";

const ProductDetail = () => {
  const [tableData, setTableData] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    getSheetData({
      sheetID: "1FnNN8wEO3jl02B7FrEYOfr5FdSt6csIi_ortuBj9o0Q",
      sheetName: "products",
      query: "SELECT *",
      callback: sheetDataHandler,
    });
  }, []);

  const sheetDataHandler = (data: SheetData) => {
    if (!data || !Array.isArray(data)) {
      console.error("Invalid sheet data received:", data);
      return;
    }
    const formattedData = transformSheetData(data);
    console.log("Formatted Sheet Data:", formattedData);
    setTableData(formattedData);
  };

  console.log("first: ", tableData);

  const FilterByTreatmentArray = useMemo(() => {
    return tableData
      .map((item) => item.forTreatmentOf)
      .filter((item) => item && item.trim() !== "");
  }, [tableData]);

  const FilterByContentArray = useMemo(() => {
    return tableData
      .flatMap((item) => item.ingredients)
      .join(",")
      .split(",")
      .filter((item) => item && item.trim() !== "");
  }, [tableData]);

  const [selectedAilments, setSelectedAilments] = useState<string[]>([]);
  const [selectedContents, setSelectedContents] = useState<string[]>([]);

  const handleSelectionChange = (
    selectedAilments: string[],
    selectedContents: string[]
  ) => {
    setSelectedAilments(selectedAilments);
    setSelectedContents(selectedContents);
  };

  // Memoizing filteredData to optimize performance
  const filteredData = useMemo(() => {
    return tableData.filter((item) => {
      const matchesAilment =
        selectedAilments.length === 0 ||
        selectedAilments.some((ailment) =>
          item.forTreatmentOf.toLowerCase().includes(ailment.toLowerCase())
        );

      const matchesContent =
        selectedContents.length === 0 ||
        item.ingredients
          .split(",")
          .some((ingredient: string) =>
            selectedContents.some((content) =>
              ingredient.toLowerCase().includes(content.toLowerCase())
            )
          );

      return matchesAilment && matchesContent;
    });
  }, [tableData, selectedAilments, selectedContents]);

  return (
    <div className="w-screen bg-blue ">
      <SecondHero title={"Fumzy Lagos Cosmetics"} image={""} />
      <IntroSection
        title={"Fumzy Lagos Cosmetics"}
        content={`champions real skin and authentic confidence with chemical free products. Every blemish, every mark, every face and body — we see beauty in it all. Our herb based cosmetics products are made for everyone, designed to enhance what’s already there without covering up what makes you, you. We believe in the power of consistency, the value of self-love, and the kind of care that goes beyond skin deep. This is about feeling good in your own skin — not for anyone else, just for you. we have a wide selection of cosmetics designed to pamper and nourish your skin. Our products include luxurious items like Coffee Body Scrub, Facial Cleansing Spray, Body Butter, Anti-Stretch Mark Cream, Herbal Black Soap, and many more. We also provide essential hair and body care items such as Aloe Vera Hair Mist Spray, Foot Spray, and a range of Oud Body Sprays for a lasting fragrance.`}
      />

      <div className="relative flex gap-4 p-2 overflow-hidden border-2 rounded md:m-8 h-fit">
        {/* filter ad control */}
        <div className="absolute md:relative">
          <div className="sticky bottom-0 z-20 ">
            <FilterBar
              FilterByTreatmentArray={FilterByTreatmentArray}
              FilterByContentArray={FilterByContentArray}
              onSelectionChange={handleSelectionChange}
            />
          </div>
        </div>

        {/* Product list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-2 z-0 max-h-[90vh] overflow-y-scroll">
          {filteredData.map((a, i) => (
            <div key={i}>
              <ProductDetailModal
                trigger={undefined}
                img={a?.image_url}
                name={a?.name}
                description={a?.description}
                forTreatmentOf={a?.forTreatmentOf}
                ingredient={a?.ingredients?.split(",")}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
