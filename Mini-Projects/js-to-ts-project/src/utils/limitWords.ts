export const truncateText = (text: string, maxWords:number): string => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return text;
};
