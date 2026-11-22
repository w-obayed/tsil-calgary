export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  detailedPoints: string[];
  image: string;
  href: string;
  category: "landscaping" | "irrigation" | "lighting" | "maintenance";
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  modelCode?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  author: string;
  location: string;
  quote: string;
  rating: number;
  service: string;
  source?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "landscaping" | "irrigation" | "lighting" | "commercial";
  image: string;
  description: string;
  location?: string;
}
