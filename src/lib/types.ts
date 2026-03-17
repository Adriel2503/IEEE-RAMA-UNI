export interface Chapter {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  color: string;
  yearFounded: number | null;
  globalUrl: string;
  icon: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  chapter: string;
  description: string;
  image: string;
  status: "upcoming" | "past";
  location: string;
  registrationUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  chapter: string;
  tags: string[];
  image: string;
  repoUrl?: string;
  fullDescription?: string;
  impact?: string;
  status?: "active" | "completed";
  contactName?: string;
  contactEmail?: string;
  supportInfo?: string;
}

export interface Stat {
  label: string;
  value: number;
  prefix: string;
  suffix: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface NavigationData {
  topBar: NavItem[];
  mainNav: NavItem[];
  social: SocialLink[];
  email: string;
}

export interface MembershipBenefit {
  icon: string;
  title: string;
  description: string;
}
