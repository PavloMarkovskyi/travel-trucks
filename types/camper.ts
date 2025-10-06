
export interface Review {
    reviewer: string;
    comment: string;
    rating: number;
}

export interface Features {
    AC?: boolean;
    kitchen?: boolean;
    bathroom?: boolean;
    TV?: boolean;
    radio?: boolean;
    refrigerator?: boolean;
    microvawe?: boolean;
    gas?: boolean;
    water?: boolean;
    transmission?: string;
    engine?: string;
}

export interface Details {
    form?: string;
    length?: string;
    width?: string;
    height?: string;
    tank?: string;
    consumption?: string;
}

export interface Camper {
    id: string;
    name: string;
    price: number;
    location: string;
    type: string;
    gallery: string[];
    rating: number;
    features: Features;
    details: Details;
    review: Review;
}