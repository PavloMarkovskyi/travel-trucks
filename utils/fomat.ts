export const formatPrice = (v: number) => v?.toFixed(2) ?? "00.00";
export const formatRating = (v: number) => parseFloat(v?.toFixed(1)).toString();


export const formatlable = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (char) => char.toUpperCase());



