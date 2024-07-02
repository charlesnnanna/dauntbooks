export const truncateText = (text:string, textLength:number): string => {
    let truncatedText = ''
    if (text.length > textLength) {
        truncatedText = text.slice(0, textLength) 
        console.log(`${truncatedText}...`)
        return `${truncatedText}...`;
    } else {
        truncatedText = text
        console.log(truncatedText)
        return truncatedText;
    }
}