export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically select Lucide icons
  benefits: string[];
  tag: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  credentials: string[];
  social: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  isPopular: boolean;
  buttonText: string;
  colorTheme: 'starter' | 'premium' | 'elite';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: string;
}
