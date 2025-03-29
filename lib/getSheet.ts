/* eslint-disable @typescript-eslint/no-explicit-any */

export type SheetData = any[][];

// 🛠️ Transforms raw sheet data into an array of objects
export const transformSheetData = (data: SheetData) => {
  if (data.length < 2) return []; // Ensure there’s at least a header and one row

  const keys = data[1]; // First row as keys
  return data.slice(2).map((row) =>
    row.reduce((acc, value, index) => {
      acc[keys[index]] = value;
      return acc;
    }, {} as Record<string, any>)
  );
};

// 🛠️ Fetches data from Google Sheets
export const getSheetData = async ({
  sheetID,
  sheetName,
  query,
  callback,
}: {
  sheetID: string;
  sheetName: string;
  query: string;
  callback: (data: any[][]) => void;
}) => {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json&tq=${encodeURIComponent(
      query
    )}&sheet=${sheetName}`;

    const response = await fetch(url);
    const text = await response.text();

    // Remove Google's security prefix
    const json = JSON.parse(text.substring(47, text.length - 2));

    // Extract rows and columns
    const headers = json.table.cols.map((col: any) => col.label);
    const rows = json.table.rows.map((row: any) =>
      row.c.map((cell: any) => (cell ? cell.v : ""))
    );

    const sheetData = [headers, ...rows]; // First row as headers, rest as values

    console.log("data :", sheetData);
    callback(sheetData); // Send to callback
  } catch (error) {
    console.error("Error fetching Google Sheet data:", error);
  }
};
