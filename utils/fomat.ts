export const formatPrice = (v: number) => v?.toFixed(2) ?? "00.00";
export const formatRating = (v: number) => parseFloat(v?.toFixed(1)).toString();