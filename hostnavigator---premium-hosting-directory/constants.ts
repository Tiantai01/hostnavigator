import { Provider, NavLink } from './types';
import { Server, Cloud, Database, Box } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { label: 'Managed WP', href: '#Managed%20WP', icon: Server },
  { label: 'Cloud VPS', href: '#Cloud%20VPS', icon: Cloud },
  { label: 'Serverless', href: '#Serverless', icon: Box },
  { label: 'Database', href: '#Database', icon: Database },
];

export const PROVIDERS: Provider[] = [
  {
    id: 'kinsta',
    name: 'Kinsta',
    category: 'Managed WP',
    description: 'Premium managed WordPress hosting powered by Google Cloud Platform. Engineered for speed, security, and scalability.',
    rating: 4.9,
    priceStart: '$35/mo',
    features: ['Google C2 Machines', 'Cloudflare Enterprise', 'Edge Caching', '24/7 Expert Support'],
    logoSlug: 'kinsta',
    primaryColor: '#5333ED',
    websiteUrl: 'https://kinsta.com',
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'TTFB', value: '< 100ms' },
      { label: 'Locations', value: '37' }
    ],
    isFeatured: true
  },
  {
    id: 'wpengine',
    name: 'WP Engine',
    category: 'Managed WP',
    description: 'Enterprise-grade WordPress hosting platform with a focus on agility, performance, and intelligence for agencies.',
    rating: 4.7,
    priceStart: '$20/mo',
    features: ['Genesis Framework', 'Dev/Stage/Prod', 'Auto Updates', 'Threat Blocking'],
    logoSlug: 'wpengine',
    primaryColor: '#00D5D5',
    websiteUrl: 'https://wpengine.com',
    metrics: [
      { label: 'Sites', value: '1.5M+' },
      { label: 'Support', value: 'Global' },
      { label: 'Daily', value: 'Backups' }
    ]
  },
  {
    id: 'siteground',
    name: 'SiteGround',
    category: 'Managed WP',
    description: 'A popular choice for managed WordPress hosting, known for its top-rated support and Google Cloud infrastructure.',
    rating: 4.8,
    priceStart: '$2.99/mo',
    features: ['Free CDN', 'Daily Backups', 'Unmetered Traffic', 'Managed Security'],
    logoSlug: 'siteground',
    primaryColor: '#EF5734',
    websiteUrl: 'https://siteground.com',
    metrics: [
      { label: 'Sat.', value: '98%' },
      { label: 'Cache', value: 'Static' },
      { label: 'SSL', value: 'Free' }
    ]
  },
  {
    id: 'digitalocean',
    name: 'DigitalOcean',
    category: 'Cloud VPS',
    description: 'Simple, scalable cloud computing solutions. Developer-friendly virtual machines (Droplets) and managed Kubernetes.',
    rating: 4.7,
    priceStart: '$4/mo',
    features: ['Simple UI', 'Managed Kubernetes', 'App Platform', 'Object Storage'],
    logoSlug: 'digitalocean',
    primaryColor: '#0080FF',
    websiteUrl: 'https://digitalocean.com',
    metrics: [
      { label: 'Deploy', value: '55s' },
      { label: 'SLA', value: '99.99%' },
      { label: 'Locations', value: '14' }
    ]
  },
  {
    id: 'vultr',
    name: 'Vultr',
    category: 'Cloud VPS',
    description: 'High-performance cloud compute with a massive global footprint. Offers bare metal, high frequency compute, and GPU.',
    rating: 4.6,
    priceStart: '$2.50/mo',
    features: ['High Freq CPU', 'Bare Metal', 'NVIDIA GPUs', 'Infinite Scalability'],
    logoSlug: 'vultr',
    primaryColor: '#0057FF',
    websiteUrl: 'https://vultr.com',
    metrics: [
      { label: 'Locations', value: '32+' },
      { label: 'Net', value: '10Gbps' },
      { label: 'Deploy', value: '60s' }
    ]
  },
  {
    id: 'linode',
    name: 'Linode',
    category: 'Cloud VPS',
    description: 'Founded by developers, for developers. Affordable Linux virtual machines, global infrastructure, and simple pricing.',
    rating: 4.5,
    priceStart: '$5/mo',
    features: ['Flat Pricing', 'Linux VMs', 'Kubernetes', 'Cloud Storage'],
    logoSlug: 'akamai',
    primaryColor: '#02b159',
    websiteUrl: 'https://www.linode.com',
    metrics: [
      { label: 'Support', value: '24/7' },
      { label: 'API', value: 'Open' },
      { label: 'Docs', value: 'Rich' }
    ]
  },
  {
    id: 'fly',
    name: 'Fly.io',
    category: 'Serverless',
    description: 'Deploy App Servers close to your users. Run your full stack apps (and databases!) all over the world.',
    rating: 4.8,
    priceStart: 'Free',
    features: ['Edge Compute', 'Postgres', 'Global Network', 'Docker Based'],
    logoSlug: 'flydotio',
    primaryColor: '#24185B',
    websiteUrl: 'https://fly.io',
    metrics: [
      { label: 'Deploy', value: 'Instant' },
      { label: 'Region', value: 'Global' },
      { label: 'CLI', value: 'Robust' }
    ],
    isFeatured: true
  },
  {
    id: 'render',
    name: 'Render',
    category: 'Serverless',
    description: 'A unified cloud to build and run all your apps and websites with free SSL, a global CDN, and private networks.',
    rating: 4.6,
    priceStart: 'Free',
    features: ['Zero DevOps', 'DDoS Protection', 'Auto Deploys', 'Priv. Network'],
    logoSlug: 'render',
    primaryColor: '#000000',
    websiteUrl: 'https://render.com',
    metrics: [
      { label: 'Git', value: 'Push' },
      { label: 'SSL', value: 'Auto' },
      { label: 'Scale', value: 'Auto' }
    ]
  },
  {
    id: 'cloudways',
    name: 'Cloudways',
    category: 'Managed WP',
    description: 'Managed cloud hosting platform that lets you choose from 5 providers including AWS, Google Cloud, and DigitalOcean.',
    rating: 4.8,
    priceStart: '$12/mo',
    features: ['Multi-Cloud', 'Free Migration', 'Optimized Stack', 'Pay-as-you-go'],
    logoSlug: 'cloudways',
    primaryColor: '#2C3E50',
    websiteUrl: 'https://cloudways.com',
    metrics: [
      { label: 'Providers', value: '5' },
      { label: 'Support', value: '24/7' },
      { label: 'Cache', value: 'Built-in' }
    ]
  },
  {
    id: 'hetzner',
    name: 'Hetzner',
    category: 'Dedicated',
    description: 'German-engineered dedicated servers and cloud instances. Known for incredible price-to-performance ratio.',
    rating: 4.5,
    priceStart: '€4/mo',
    features: ['German Quality', 'Eco-Friendly', 'DDOS Protection', 'Root Access'],
    logoSlug: 'hetzner',
    primaryColor: '#D50C2D',
    websiteUrl: 'https://hetzner.com',
    metrics: [
      { label: 'Traffic', value: '20TB' },
      { label: 'Port', value: '1Gbit' },
      { label: 'Setup', value: 'Instant' }
    ]
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'Database',
    description: 'The open source Firebase alternative. Instantly create a backend with Postgres, Authentication, and realtime subscriptions.',
    rating: 4.9,
    priceStart: 'Free',
    features: ['Postgres', 'Auth', 'Edge Func', 'Realtime'],
    logoSlug: 'supabase',
    primaryColor: '#3ECF8E',
    websiteUrl: 'https://supabase.com',
    metrics: [
      { label: 'Type', value: 'SQL' },
      { label: 'Scale', value: 'Auto' },
      { label: 'Open', value: 'Source' }
    ],
    isFeatured: true
  },
  {
    id: 'mongodb',
    name: 'MongoDB Atlas',
    category: 'Database',
    description: 'The multi-cloud database service for modern applications. Deploy fully managed MongoDB across AWS, Azure, or Google Cloud.',
    rating: 4.7,
    priceStart: 'Free',
    features: ['Multi-Cloud', 'Serverless', 'Search', 'Analytics'],
    logoSlug: 'mongodb',
    primaryColor: '#00ED64',
    websiteUrl: 'https://www.mongodb.com/atlas',
    metrics: [
      { label: 'Type', value: 'NoSQL' },
      { label: 'Region', value: '90+' },
      { label: 'Uptime', value: '99.995' }
    ]
  },
  {
    id: 'bluehost',
    name: 'Bluehost',
    category: 'Managed WP',
    description: 'One of the largest website hosting providers and powers millions of websites. Officially recommended by WordPress.org.',
    rating: 4.2,
    priceStart: '$2.95/mo',
    features: ['Free Domain', '24/7 Support', 'Website Builder', '1-Click Install'],
    logoSlug: 'bluehost',
    primaryColor: '#2072f6',
    websiteUrl: 'https://bluehost.com',
    metrics: [
      { label: 'Ease', value: 'High' },
      { label: 'Cost', value: 'Low' },
      { label: 'Scale', value: 'Med' }
    ]
  }
];

export const PRODUCTS = [];
export const TESTIMONIALS = [];