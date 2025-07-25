export interface Project {
  id: number;
  title: string;
  location: string;
  area: string;
  floors: string;
  type: string;
  status: 'Work In Progress' | 'Completed';
  images: string[];
  description: string;
  completionDate: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Institutional';
  features?: string[];
  client?: string;
  scope?: string;
  challenges?: string[];
  solutions?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Mahindra Happinest',
    location: 'Kalbhor Nagar, Pune',
    area: '2.5 Acres',
    floors: 'G+7',
    type: 'Residential Complex',
    status: 'Completed',
    images: ['/lovable-uploads/mahindra-happinest.png'],
    description: 'A premium residential complex featuring modern amenities and sustainable design.',
    completionDate: 'June 2023',
    category: 'Residential',
    client: 'Mahindra Lifespaces',
    features: [
      'Premium residential apartments',
      'Modern amenities',
      'Sustainable design',
      'Landscaped gardens',
      '24/7 security'
    ],
    scope: 'Complete civil work and finishing',
    challenges: [
      'Tight urban site with limited access',
      'Strict environmental regulations',
      'Aggressive timeline'
    ],
    solutions: [
      'Implemented just-in-time material delivery',
      'Used eco-friendly construction materials',
      'Adopted modular construction techniques'
    ]
  },
  // Add more projects here following the same structure
  {
    id: 2,
    title: 'Supreme Infra',
    location: 'Hinjewadi, Pune',
    area: '1.8 Acres',
    floors: 'G+12',
    type: 'Commercial Complex',
    status: 'Work In Progress',
    images: ['/lovable-uploads/supreme-infra.jpg'],
    description: 'A state-of-the-art commercial complex designed for modern businesses.',
    completionDate: 'December 2024',
    category: 'Commercial',
    client: 'Supreme Group',
    features: [
      'Premium office spaces',
      'Retail outlets',
      'Underground parking',
      'Smart building systems',
      'Landscaped atrium'
    ],
    scope: 'Complete construction and MEP works'
  }
  // Add more projects as needed
];
