import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatProps {
  value: string;
  label: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}
