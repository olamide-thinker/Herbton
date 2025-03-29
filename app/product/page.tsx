"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IntroSection } from "@/components/sharedUi/IntroSection";
import SecondHero from "@/components/sharedUi/SecondHero";
import React, { useEffect, useState } from "react";
import { FilterBar } from "./comps/FilterBar";
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

  return (
    <div className="w-screen bg-blue ">
      <SecondHero title={"Products (Global New Herbal Life) "} image={""} />
      <IntroSection
        title={"Global New Herbal Life (GNHL)"}
        content={` is a leading NAFDAC-approved manufacturer, renowned for our high-quality herbal remedies and cosmetics. With over 50 carefully crafted products, we take pride in producing, packaging, and distributing every item to ensure they meet the highest industry standards. <br><br>

Our range of herbal remedies includes solutions for a variety of health concerns, such as diabetes, high blood pressure, asthma, ulcers, fertility, and infections, among others. Notable products include the Diabetes Remedy, Pile Remedy, High Blood Pressure Remedy, Asthma Remedy, and more. We also offer specialty treatments like Body Reset and Men's Remedy OTG.<br><br>

In addition to our herbal remedies, GNHL also offers a wide selection of cosmetics designed to pamper and nourish your skin. Our products include luxurious items like Coffee Body Scrub, Facial Cleansing Spray, Body Butter, Anti-Stretch Mark Cream, Herbal Black Soap, and many more. We also provide essential hair and body care items such as Aloe Vera Hair Mist Spray, Foot Spray, and a range of Oud Body Sprays for a lasting fragrance.<br><br>

At GNHL, we are committed to delivering effective, natural solutions that enhance your well-being and beauty.`}
      />

      <div className="relative flex gap-4 p-2 m-8 border-2">
        {/* filter ad control */}
        <div className="border ">
          <div className="sticky top-4 ">
            <FilterBar />
          </div>
        </div>
        {/* Product list */}
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((a, i) => (
            <div key={i}>
              <ProductDetailModal />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
