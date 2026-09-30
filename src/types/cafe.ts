export type MenuCategory = 'all' | 'signature' | 'coffee' | 'brunch' | 'bakery';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: string;
  description: string;
  tag?: string;
  image: string;
  popular?: boolean;
  notes?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  tag: string;
  aspect: string;
  image: string;
  caption: string;
}

export interface CafeFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SocialPost {
  id: string;
  handle: string;
  image: string;
  caption: string;
  likes: string;
  comments: string;
  timestamp: string;
}
