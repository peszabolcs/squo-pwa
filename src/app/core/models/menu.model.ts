export interface MenuItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  color: string;
}

export interface PromoItem {
  title: string;
  description: string;
  gradient: string;
}

export interface Stats {
  bottles: number;
  points: number;
  co2: number;
}
