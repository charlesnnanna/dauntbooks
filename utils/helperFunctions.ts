export const truncateText = (text: string, textLength: number): string => {
  let truncatedText = '';
  if (text.length > textLength) {
    truncatedText = text.slice(0, textLength);
    return `${truncatedText}...`;
  } 
    truncatedText = text;
    return truncatedText;
  
};
