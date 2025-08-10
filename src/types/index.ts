// Shared type definitions for V-LOOP application

export interface MousePosition {
  x: number;
  y: number;
}

export interface ComponentProps {
  mousePosition: MousePosition;
}

export interface NavigationProps extends ComponentProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrolled: boolean;
}

export interface HeroSectionProps extends ComponentProps {
  scrolled: boolean;
}

export interface AboutSectionProps extends ComponentProps {}

export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
  featured: boolean;
}

export interface PortfolioSectionProps extends ComponentProps {}

export interface FooterSectionProps extends ComponentProps {}

// Animation duration constants
export const ANIMATION_DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
  orbital: {
    orbit1: 20000,
    orbit2: 25000,
    orbit3: 30000,
    orbit4: 22000,
  },
  spin: {
    slow: 15000,
    reverse: 12000,
  }
} as const;

// Brand colors
export const BRAND_COLORS = {
  primary: '#EB9522',
  secondary: '#ECA220',
  tertiary: '#EEBD19',
} as const;
