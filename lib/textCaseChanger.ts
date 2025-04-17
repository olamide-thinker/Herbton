type CaseType = "uppercase" | "lowercase" | "sentencecase" | "titlecase";
type Delimiters = string[];

export function changeCase(
  input: string,
  type: CaseType,
  delimiters: Delimiters = [",", ".", ";", ":"]
): string {
  const toSentenceCase = (str: string) => {
    const lower = str.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const toTitleCase = (str: string) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const capitalizeAfterDelimiters = (
    str: string,
    delimiters: Delimiters
  ): string => {
    const regex = new RegExp(`[${delimiters.join("")}]\\s*([a-z])`, "g");
    return str.replace(regex, (match, p1) => {
      return match.replace(p1, p1.toUpperCase()); // Capitalize the first letter after the delimiter
    });
  };

  switch (type) {
    case "uppercase":
      return input.toUpperCase();
    case "lowercase":
      return input.toLowerCase();
    case "sentencecase":
      return toSentenceCase(input);
    case "titlecase":
      return toTitleCase(input);
    default:
      return capitalizeAfterDelimiters(input, delimiters);
  }
}
