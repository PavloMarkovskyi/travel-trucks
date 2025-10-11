export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
  gallery: {
    thumb: string;
    original: string;
  }[];
  reviews: Review[];
}

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}
export type Filters = Partial<{
  location: string;
  form: ''|'panelTruck' | 'integrated' | 'alcove';
  AC: boolean;
  kitchen: boolean;
  bathroom: boolean;
  TV: boolean;

}>& {
  [key: string]: string | boolean | undefined;
};



export type FeatureIconKey = 'transmission' | 'engine' | 'AC' | 'bathroom' | 'kitchen' | 'TV' | 'radio' | 'refrigerator' | 'microwave' | 'gas' | 'water';
export type DetailsKey = 'form' | 'length' | 'width' | 'height' | 'tank' | 'consumption';
