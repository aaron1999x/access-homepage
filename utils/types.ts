import { LucideIcon } from 'lucide-react';
export interface AboutUsStat {
  number: number;
  description: string;
  suffix?: string;
}

export interface InsightCard {
  title: string;
  description: string;
  image: string;
}
export interface SocialLink {
  href: string;
  ariaLabel: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  content: string;
  isLink?: boolean;
}
