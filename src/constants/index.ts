// Constants for V-LOOP application

export const BRAND_COLORS = {
  primary: '#EB9522',
  secondary: '#ECA220', 
  tertiary: '#EEBD19',
  black: '#000000',
  white: '#FFFFFF',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  }
} as const;

export const BREAKPOINTS = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const ANIMATION_DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
  slower: 1000,
} as const;

export const Z_INDEX = {
  background: -1,
  default: 0,
  dropdown: 1000,
  modal: 1050,
  popover: 1100,
  tooltip: 1200,
  navigation: 1300,
} as const;

export const PORTFOLIO_CATEGORIES = [
  'all',
  'weddings',
  'events',
  'portraits',
  'commercial',
  'lifestyle'
] as const;

export const NAVIGATION_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
] as const;

export const SOCIAL_LINKS = [
  { href: 'https://instagram.com/vloop', label: 'Instagram', icon: 'instagram' },
  { href: 'https://facebook.com/vloop', label: 'Facebook', icon: 'facebook' },
  { href: 'https://youtube.com/vloop', label: 'YouTube', icon: 'youtube' },
  { href: 'mailto:hello@vloop.com', label: 'Email', icon: 'email' },
] as const;
