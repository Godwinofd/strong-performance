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

export type ProductCategory = 'T-Shirts' | 'Tracksuits' | 'Supplements' | 'Accessories';

export interface ProductVariant {
  id: string;       // original product id used for cart
  label: string;    // e.g. "Large Logo" | "Small Logo"
  image: string;
}

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
  /** When set, this card groups multiple purchasable variants (e.g. logo styles) */
  variants?: ProductVariant[];
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'plan' | 'product';
}
