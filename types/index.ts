export type ProductCategory =
  | "Cleanser"
  | "Toner"
  | "Essence"
  | "Serum"
  | "Moisturizer"
  | "Mask"
  | "Sunscreen"
  | "Eye Care";

export type SkinConcern =
  | "Hydration"
  | "Brightening"
  | "Anti-aging"
  | "Sensitive Skin";

export type SkinType =
  | "All"
  | "Dry"
  | "Oily"
  | "Combination"
  | "Sensitive"
  | "Normal";

export type ProductBadge =
  | "Best Seller"
  | "New"
  | "Limited"
  | "Clean Beauty"
  | "Clinically Tested"
  | null;

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  shortDescription: string;
  ingredients: string[];
  keyIngredients: { name: string; benefit: string }[];
  benefits: string[];
  howToUse: string[];
  details: {
    volume: string;
    skinType: SkinType[];
    concerns: SkinConcern[];
    texture: string;
    scent: string;
  };
  image: string;
  gallery: string[];
  badge: ProductBadge;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  productId?: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified?: boolean;
  skinType?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface CategoryItem {
  id: string;
  name: ProductCategory | SkinConcern;
  description: string;
  href: string;
  image: string;
}

export interface IngredientSpotlight {
  id: string;
  name: string;
  origin: string;
  description: string;
  benefits: string[];
}
