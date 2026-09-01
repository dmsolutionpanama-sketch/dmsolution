export interface SubMenuItem {
  title: string;
  description?: string;
  badge?: string;
}

export interface NavPillar {
  id: string;
  title: string;
  category: string;
  items: SubMenuItem[];
}

export interface SectorItem {
  id: string;
  sectorTag: string;
  title: string;
  subtitle: string;
  description: string;
  points: {
    title: string;
    detail: string;
  }[];
  imgColor: string;
  imgGray: string;
  fallbackGradientColor: string;
  fallbackGradientGray: string;
}
