export enum PlanCategory {
  WEIGHT_LOSS = 'Weight Loss',
  HYROX = 'HYROX Training',
  STRENGTH = 'Strength & Conditioning',
  FUNCTIONAL = 'Functional Fitness'
}

export interface Plan {
  id: string;
  category: PlanCategory;
  name: string;
  description: string;
  target: string;
  price: number;
  features: string[];
  image: string;
  icon: string;
}

export type ProductCategory = 'T-Shirts' | 'Tracksuits';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  image: string;
  hoverImage: string;
  description?: string;
  specs?: string[];
  isComingSoon?: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'plan' | 'product';
}