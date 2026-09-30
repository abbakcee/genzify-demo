import { MenuItem, GalleryPhoto, CafeFeature, SocialPost } from '../types/cafe';

export const HERO_IMAGE = '/src/assets/images/hero_cafe_vibe_1790803915176.jpg';
export const MATCHA_IMAGE = '/src/assets/images/cafe_matcha_drink_1790803925774.jpg';
export const BRUNCH_IMAGE = '/src/assets/images/cafe_brunch_toast_1790803936994.jpg';
export const PASTRY_IMAGE = '/src/assets/images/cafe_pastry_croissant_1790803948618.jpg';
export const INTERIOR_IMAGE = '/src/assets/images/cafe_interior_space_1790803957943.jpg';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Iced Strawberry Matcha Cloud',
    category: 'signature',
    price: '$6.75',
    description: 'Ceremonial Uji matcha layered over house-made strawberry compote and cold-foamed oat milk.',
    tag: 'Bestseller',
    image: MATCHA_IMAGE,
    popular: true,
    notes: 'Ceremonial Grade · Oat Milk'
  },
  {
    id: 'm2',
    name: 'Rustic Truffle Avocado Toast',
    category: 'brunch',
    price: '$12.50',
    description: 'Toasted seeded sourdough, smashed Haas avocado, 6-minute poached egg, microgreens, and chili crunch.',
    tag: 'Chef Pick',
    image: BRUNCH_IMAGE,
    popular: true,
    notes: 'Sourdough · Organic Eggs'
  },
  {
    id: 'm3',
    name: 'Flaky Golden Almond Croissant',
    category: 'bakery',
    price: '$5.50',
    description: 'Twice-baked French butter croissant filled with frangipane cream and topped with toasted sliced almonds.',
    tag: 'Baked Daily',
    image: PASTRY_IMAGE,
    popular: true,
    notes: 'French Butter · Baked Fresh'
  },
  {
    id: 'm4',
    name: 'Velvet Flat White',
    category: 'coffee',
    price: '$4.95',
    description: 'Double ristretto shot of our Ethiopian single-origin roast folded into velvety micro-textured whole or oat milk.',
    tag: 'Specialty Espresso',
    image: HERO_IMAGE,
    popular: true,
    notes: 'Single Origin · Rich Crema'
  },
  {
    id: 'm5',
    name: 'Pistachio Creme Cold Brew',
    category: 'signature',
    price: '$6.50',
    description: '18-hour slow steeped cold brew topped with silky salted pistachio sweet cream and crushed roasted nuts.',
    tag: 'Trending',
    image: HERO_IMAGE,
    popular: true,
    notes: 'House Roast · Salted Pistachio'
  },
  {
    id: 'm6',
    name: 'Brioche Breakfast Melt',
    category: 'brunch',
    price: '$11.00',
    description: 'Fluffy scrambled farm eggs, melted Gruyère, crisp uncured prosciutto, and garlic chive aioli on toasted brioche.',
    tag: 'Savory',
    image: BRUNCH_IMAGE,
    notes: 'Farm Fresh · Warm Brioche'
  },
  {
    id: 'm7',
    name: 'Cardamom Brown Butter Bun',
    category: 'bakery',
    price: '$5.25',
    description: 'Swedish-inspired twisted cardamom knot infused with browned butter and crystallized pearl sugar.',
    tag: 'Staff Favorite',
    image: PASTRY_IMAGE,
    notes: 'Aromatic Spice · Brown Butter'
  },
  {
    id: 'm8',
    name: 'Spanish Honey Iced Cortado',
    category: 'coffee',
    price: '$5.20',
    description: 'Equal parts bold espresso and condensed oat milk shaken over hand-cut ice with a dash of Ceylon cinnamon.',
    tag: 'Signature Coffee',
    image: MATCHA_IMAGE,
    notes: 'Hand-Cut Ice · Ceylon Cinnamon'
  },
];

export const CAFE_FEATURES: CafeFeature[] = [
  {
    id: 'f1',
    title: 'Aesthetic by Design',
    description: 'Sunlit travertine tables, terrazzo counters, and warm ambient glow built to look stunning in person and on your camera roll.',
    iconName: 'Camera'
  },
  {
    id: 'f2',
    title: 'Specialty Roast & Ceremonial Matcha',
    description: 'Direct-trade single origin espresso beans alongside ceremonial Uji matcha and pure house-made botanical syrups.',
    iconName: 'Coffee'
  },
  {
    id: 'f3',
    title: 'Fresh Brunch & Baked Treats',
    description: 'Artisanal sourdough toasts, nourishing savory bowls, and flaky Viennoiserie baked fresh every single morning.',
    iconName: 'Croissant'
  },
  {
    id: 'f4',
    title: 'Study & Work Friendly',
    description: 'High-speed fiber WiFi, accessible power outlets at cozy booths, and quiet corners for focused deep work sprints.',
    iconName: 'Laptop'
  },
  {
    id: 'f5',
    title: 'Curated Sound & Warm Chill',
    description: 'Carefully curated lo-fi and indie acoustic playlists balanced at the perfect volume for conversation and reading.',
    iconName: 'Music'
  },
  {
    id: 'f6',
    title: 'Vibrant Community Hangout',
    description: 'A genuine neighborhood third place for weekend coffee dates, creative meetups, and relaxed afternoon catchups.',
    iconName: 'Users'
  }
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Morning Sun & Iced Matcha',
    tag: 'Signature Drinks',
    aspect: 'aspect-4/3',
    image: HERO_IMAGE,
    caption: 'Our signature oat latte and strawberry matcha enjoying the 9am sun window.'
  },
  {
    id: 'g2',
    title: 'The Strawberry Cloud',
    tag: 'Matcha Bar',
    aspect: 'aspect-square',
    image: MATCHA_IMAGE,
    caption: 'Freshly whisked ceremonial green tea layered over sweet strawberry puree.'
  },
  {
    id: 'g3',
    title: 'Sourdough Avocado Brunch',
    tag: 'Kitchen & Brunch',
    aspect: 'aspect-square',
    image: BRUNCH_IMAGE,
    caption: 'Seeded artisan toast with fresh edible viola blooms and golden soft yolk.'
  },
  {
    id: 'g4',
    title: 'Flaky Viennoiserie & Flat White',
    tag: 'Bakery',
    aspect: 'aspect-square',
    image: PASTRY_IMAGE,
    caption: 'Twice-baked almond pastry paired with velvety single-origin espresso.'
  },
  {
    id: 'g5',
    title: 'The Sunlit Booths',
    tag: 'Interior & Vibe',
    aspect: 'aspect-4/3',
    image: INTERIOR_IMAGE,
    caption: 'Cozy curved oak booths, bouclé cushions, and soft ambient afternoon lighting.'
  }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'p1',
    handle: '@genzifycafe',
    image: MATCHA_IMAGE,
    caption: 'Your daily reminder that iced matcha tastes 10x better in natural sunlight ✨ What are you sipping today?',
    likes: '1,248',
    comments: '46',
    timestamp: '2h ago'
  },
  {
    id: 'p2',
    handle: '@genzifycafe',
    image: BRUNCH_IMAGE,
    caption: 'The sourdough avo toast you deserve this weekend. Perfectly poached eggs & chili crunch on deck 🥑',
    likes: '2,890',
    comments: '89',
    timestamp: '1d ago'
  },
  {
    id: 'p3',
    handle: '@genzifycafe',
    image: INTERIOR_IMAGE,
    caption: 'Slow mornings at our favorite corner table. Laptop out, flat white hot, and lo-fi playlist on repeat ☕️🪴',
    likes: '3,412',
    comments: '112',
    timestamp: '2d ago'
  },
  {
    id: 'p4',
    handle: '@genzifycafe',
    image: PASTRY_IMAGE,
    caption: 'Straight out of the oven: almond croissants with crisp flaky layers & powdered sugar dust 🥐💛',
    likes: '1,780',
    comments: '53',
    timestamp: '3d ago'
  }
];

export const LOCATION_DATA = {
  address: '[124 Creative Boulevard, Midtown Arts District]',
  city: 'City Center / Metro Hub',
  phone: '[+1 (555) 234-5678]',
  whatsapp: '[+1 (555) 234-5678]',
  instagram: '@genzifycafe',
  email: 'hello@genzifycafe.concept',
  hours: [
    { days: 'Monday – Friday', hours: '7:30 AM – 9:00 PM' },
    { days: 'Saturday', hours: '8:00 AM – 10:00 PM' },
    { days: 'Sunday', hours: '8:00 AM – 9:00 PM' },
    { days: 'Kitchen Brunch', hours: 'Daily until 4:00 PM' }
  ],
  amenities: [
    'Ultra-fast WiFi (300+ Mbps)',
    'Power outlets at every booth',
    'Dog-friendly outdoor patio',
    'Indoor climate controlled',
    'Wheelchair accessible'
  ]
};
