/* ============================================
   TypeScript Type Definitions
   ICSSG-AI 2027 Conference Website
   ============================================ */

// ---- Navigation ----
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  badge?: string;
}

export interface MegaMenuSection {
  title: string;
  items: NavItem[];
  featured?: {
    title: string;
    description: string;
    href: string;
    image?: string;
  };
}

// ---- Conference ----
export interface ConferenceInfo {
  name: string;
  shortName: string;
  tagline: string;
  theme: string;
  edition: string;
  year: number;
  dates: {
    start: string;
    end: string;
  };
  venue: {
    name: string;
    city: string;
    state: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  organizer: {
    name: string;
    shortName: string;
    website: string;
    logo: string;
  };
  stats: ConferenceStat[];
  social: SocialLink[];
  contact: ContactInfo;
}

export interface ConferenceStat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  alternateEmail?: string;
  alternatePhone?: string;
  address: string;
}

// ---- Speakers ----
export interface Speaker {
  id: string;
  slug: string;
  name: string;
  title: string;
  affiliation: string;
  country: string;
  countryCode: string;
  image: string;
  bio: string;
  researchInterests: string[];
  type: "keynote" | "invited" | "panel";
  social: {
    googleScholar?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    orcid?: string;
  };
  talkTitle?: string;
  talkAbstract?: string;
}

// ---- Tracks ----
export interface Track {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  color: string;
  topics: string[];
  chairs: string[];
  image?: string;
}

// ---- Themes ----
export interface ConferenceTheme {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  highlights: string[];
  relatedTracks: string[];
}

// ---- Committee ----
export interface CommitteeMember {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  country: string;
  countryCode: string;
  image?: string;
  role: CommitteeRole;
  category: CommitteeCategory;
}

export type CommitteeRole =
  | "patron"
  | "general-chair"
  | "program-chair"
  | "convener"
  | "co-convener"
  | "member";

export type CommitteeCategory =
  | "patron"
  | "chairs"
  | "conveners"
  | "technical"
  | "finance"
  | "hospitality"
  | "accommodation"
  | "logistics"
  | "publicity"
  | "organizing"
  | "advisory"
  | "international";

// ---- Important Dates ----
export interface ImportantDate {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: string;
  status: "upcoming" | "active" | "extended" | "closed";
  newDate?: string;
}

// ---- Registration ----
export interface RegistrationTier {
  id: string;
  title: string;
  category: string;
  earlyBird: {
    price: number;
    currency: string;
    deadline: string;
  };
  regular: {
    price: number;
    currency: string;
  };
  features: string[];
  popular?: boolean;
  icon: string;
}

// ---- Program ----
export interface ProgramDay {
  date: string;
  dayLabel: string;
  sessions: ProgramSession[];
}

export interface ProgramSession {
  id: string;
  title: string;
  type: "keynote" | "paper" | "workshop" | "panel" | "break" | "social" | "ceremony";
  startTime: string;
  endTime: string;
  track?: string;
  room?: string;
  speakers?: string[];
  description?: string;
  papers?: string[];
}

// ---- Workshop ----
export interface Workshop {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorAffiliation: string;
  duration: string;
  type: "hands-on" | "tutorial" | "industry" | "demo";
  topics: string[];
  prerequisites?: string[];
  capacity?: number;
  icon: string;
}

// ---- Sponsors ----
export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
  tier: SponsorTier;
  description?: string;
}

export type SponsorTier = "platinum" | "gold" | "silver" | "academic" | "industry";

// ---- Venue / Accommodation ----
export interface Hotel {
  id: string;
  name: string;
  category: "luxury" | "premium" | "standard" | "budget" | "campus";
  distance: string;
  priceRange: string;
  amenities: string[];
  website?: string;
  phone?: string;
  image?: string;
  bookingLink?: string;
}

export interface TravelInfo {
  type: "airport" | "railway" | "bus";
  name: string;
  distance: string;
  description: string;
  transportOptions: string[];
}

// ---- Local Attractions ----
export interface Attraction {
  id: string;
  name: string;
  description: string;
  distance: string;
  category: string;
  image: string;
  highlights: string[];
}

// ---- FAQ ----
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// ---- News ----
export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  category: "announcement" | "update" | "deadline" | "general";
  featured: boolean;
  image?: string;
}

// ---- Gallery ----
export interface GalleryItem {
  id: string;
  title: string;
  type: "image" | "video";
  src: string;
  thumbnail: string;
  category: string;
  year?: number;
}

// ---- Downloads ----
export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileName: string;
  fileSize: string;
  fileType: string;
  url: string;
  icon: string;
  category: "template" | "brochure" | "form" | "schedule" | "certificate" | "poster";
}

// ---- Publication ----
export interface Publisher {
  id: string;
  name: string;
  logo: string;
  description: string;
  indexing: string[];
  website: string;
}

// ---- Admin ----
export interface AdminSection {
  id: string;
  label: string;
  icon: string;
  href: string;
  count?: number;
}

// ---- Form ----
export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
  category: string;
}

export interface PaperSubmissionFormData {
  title: string;
  authors: string;
  track: string;
  abstract: string;
  keywords: string;
  file?: File;
}

// ---- Generic ----
export interface SectionProps {
  id?: string;
  className?: string;
}

export interface AnimationConfig {
  initial: Record<string, number | string>;
  animate: Record<string, number | string>;
  transition: Record<string, number | string>;
}
