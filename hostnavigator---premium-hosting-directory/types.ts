import { LucideIcon } from 'lucide-react';

export interface Provider {
  id: string;
  name: string;
  category: 'Managed WP' | 'Cloud VPS' | 'Dedicated' | 'Serverless' | 'Database';
  description: string;
  rating: number;
  priceStart: string;
  features: string[];
  logoSlug: string;
  primaryColor: string;
  websiteUrl: string;
  metrics: {
    label: string;
    value: string;
  }[];
  isFeatured?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  icon?: LucideIcon;
}