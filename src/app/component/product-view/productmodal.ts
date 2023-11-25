export interface product{
    id:number;
    title:string;
    description:string;
    price:number;
    category:string;
    thumbnail:string;
    image:string;
}

export interface favorite{
  id: string;
  name: string;
  image: string;
  badges: any;
  regionId: string;
  iso: string;
  currency: string;
  symbol: string;
  platformId: string;
  description: string;
  count: number;
  attributes: any;
    
    }
