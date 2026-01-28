export enum AreaStatus {
  ACTIVE = 'ACTIVE',
  IMPACTED = 'IMPACTED',
  CAUTION = 'CAUTION'
}

export type Category = 'Agricultural' | 'Artisanal' | 'Traditional';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Category;
  imageUrl: string;
  producerPhone: string;
}

export interface SiteSettings {
  areaStatus: AreaStatus;
  statusMessage: string;
  lastUpdated: string;
}
