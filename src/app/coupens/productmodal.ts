export interface Product {
  id: string;
  name: string;
  image: string;
  badges: any;
  regionId?: string;
  iso: string;
  currency: string;
  symbol: string;
  platformId?: string;
  description: string;
  count: number;
  attributes: any;
}
export interface AllProduct {
  id: string;
  name: string;
  image?: string;
  currency: string;
  icatalogIdso: string;
  price: string;
  symbol: string;
  description?: string;
}
export interface PubgMobileModel {
  success: boolean;
  status: number;
  data: {
    id: string;
    name: string;
    image: string;
    badges: null;
    region: {
      id: string;
      iso: string;
      name: string;
      currency: string;
      code: string;
      symbol: string;
    };
    platform: {
      id: string;
      name: string;
      description: string;
      image: string;
      url: string;
      tac: null;
      tacUrl: string;
    };
    products: Product2[];
    attributes: Attribute[];
  };
  page: number;
  pages: number;
  limit: number;
  total: number;
  errors: {};
}

interface Product2 {
  id: string;
  catalogId: string;
  name: string;
  description: null;
  delivery: number;
  deliveryValue: number;
  image: null;
  price: number;
  currencyName: string;
  currency: string;
  symbol: string;
  quantity: number;
}

interface Attribute {
  name: string;
  type: string;
  optional: boolean;
  options: null;
}
export interface Category {
  id: number;
  name: string;
  type?: string;
  slug: string;
  image?: string;
  mobileImage?: string;
  banner?: string;
  sub?: SubCategory[];
  subCount?: number;
  platforms?: PlatformModel[];
  platformsCount?: number;
  parentId?: string;

  items?: number;
  parent?: this;
  children?: this[];

}
export interface SubCategory {
  id: number;
  name: string;
  type?: string;
  slug: string;
  image?: string;
  mobileImage?: string;
  banner?: string;
 
  subCount?: number;
  platforms?: PlatformModel[];
  platformsCount?: number;
  parentId?: string;

  items?: number;
  parent?: this;
  children?: this[];

}

export interface PlatformModel {
  platformId?: string;
  id?: string;
  name?: string;
  catalogCount?: number;
  description?: string;
  image?: string;
  url?: string;
  tac?: string;
  tacUrl?: string;
  order?: number;
}
export interface Category2 {
  id: number;
  name: string;
  image: string;
  mobileImage: string;
  banner: string;
  sub: SubCategory2[] ;
  subCount: number;
  platforms: Platform[];
  platformsCount: number;
  parentId: number | null;
}

export interface SubCategory2 {
  id: number;
  name: string;
  image: string | null;
  mobileImage: string | null;
  banner:  string | null | undefined;
 
  subCount: number;
  platforms: Platform[];
  platformsCount: number;
  parentId: number;
}

export interface Platform {
  platformId: string;
}

export interface ApiResponse {
  success: boolean;
  status: number;
  data: Category2[];
  page: number;
  pages: number;
  limit: number;
  total: number;
  errors: any;
}

export interface PlatformModel {
  platformId?: string;
  id?: string;
  name?: string;
  catalogCount?: number;
  description?: string;
  image?: string;
  url?: string;
  tac?: string;
  tacUrl?: string;
  order?: number;
}
export interface Region {
  id: string;
  iso: string;
  name: string;
  currency: string;
  catalogCount: string;
  symbol: string;
  order?: number;
}