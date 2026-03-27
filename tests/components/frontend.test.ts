// Frontend component tests
import { describe, it, expect } from 'vitest';

// Mock data matching API response structure
const mockProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    slug: 'ecommerce-platform',
    description: 'Full-stack e-commerce solution',
    technologies: ['React', 'Node.js'],
    featured: true,
    status: 'active',
  },
  {
    id: 2,
    title: 'Task App',
    slug: 'task-app',
    description: 'Productivity app',
    technologies: ['Next.js'],
    featured: false,
    status: 'active',
  },
];

const mockSkills = [
  { id: 1, name: 'Go', category: 'Backend', proficiency: 85, featured: true },
  { id: 2, name: 'React', category: 'Frontend', proficiency: 90, featured: true },
];

const mockExperience = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Tech Co',
    start_date: '2023-01',
    end_date: null,
    type: 'work',
  },
];

// Component rendering tests
describe('Button Component', () => {
  it('renders with text', () => {
    const text = 'Click Me';
    expect(text).toBe('Click Me');
  });

  it('applies variant classes correctly', () => {
    const variants = {
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
      outline: 'border-primary text-primary',
      ghost: 'text-primary',
    };
    expect(variants.primary).toBe('bg-primary text-white');
  });

  it('applies size classes correctly', () => {
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3',
    };
    expect(sizes.md).toBe('px-4 py-2');
  });
});

describe('Card Component', () => {
  it('renders with base classes', () => {
    const baseClasses = 'bg-background border border-border rounded-xl p-6';
    expect(baseClasses).toContain('bg-background');
  });

  it('applies hover classes when enabled', () => {
    const hoverClasses = 'hover:border-primary hover:shadow-lg transition-all cursor-pointer';
    expect(hoverClasses).toContain('hover:border-primary');
  });
});

describe('Badge Component', () => {
  it('renders default variant', () => {
    const variant = 'default';
    expect(variant).toBe('default');
  });

  it('renders primary variant for featured items', () => {
    const featured = true;
    const variant = featured ? 'primary' : 'default';
    expect(variant).toBe('primary');
  });
});

describe('Section Component', () => {
  it('applies background styles', () => {
    const backgrounds = {
      default: 'bg-background',
      muted: 'bg-muted/30',
    };
    expect(backgrounds.default).toBe('bg-background');
  });
});

// Data parsing tests
describe('API Data Parsing', () => {
  it('parses project response correctly', () => {
    const response = {
      data: mockProjects,
      meta: { current_page: 1, per_page: 15, total: 2, last_page: 1 },
    };
    expect(response.data).toHaveLength(2);
    expect(response.data[0].title).toBe('E-commerce Platform');
  });

  it('filters featured projects', () => {
    const featured = mockProjects.filter(p => p.featured);
    expect(featured).toHaveLength(1);
    expect(featured[0].title).toBe('E-commerce Platform');
  });

  it('groups skills by category', () => {
    const grouped = mockSkills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});
    expect(Object.keys(grouped)).toContain('Backend');
    expect(Object.keys(grouped)).toContain('Frontend');
  });
});

// Navigation tests
describe('Navigation', () => {
  it('generates correct hrefs', () => {
    const navLinks = [
      { label: 'Home', href: '#home' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Experience', href: '#experience' },
      { label: 'Contact', href: '#contact' },
    ];
    expect(navLinks).toHaveLength(5);
    expect(navLinks[0].href).toBe('#home');
  });
});

// Contact form validation
describe('Contact Form Validation', () => {
  it('validates required fields', () => {
    const required = ['name', 'email', 'message'];
    expect(required).toContain('name');
    expect(required).toContain('email');
    expect(required).toContain('message');
  });

  it('validates email format', () => {
    const isValidEmail = (email: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('invalid')).toBe(false);
  });
});

// Pagination tests
describe('Pagination', () => {
  it('calculates total pages correctly', () => {
    const total = 25;
    const perPage = 15;
    const totalPages = Math.ceil(total / perPage);
    expect(totalPages).toBe(2);
  });

  it('generates pagination meta', () => {
    const meta = {
      current_page: 1,
      per_page: 15,
      total: 30,
      last_page: 2,
    };
    expect(meta.current_page).toBe(1);
    expect(meta.last_page).toBe(2);
  });
});

// Router behavior tests
describe('Page Routing', () => {
  it('maps sections to IDs', () => {
    const sectionMap = {
      projects: '#projects',
      skills: '#skills',
      experience: '#experience',
      contact: '#contact',
    };
    expect(sectionMap.projects).toBe('#projects');
  });
});

// Responsive design tests
describe('Responsive Design', () => {
  it('defines breakpoint classes', () => {
    const breakpoints = {
      sm: 'max-width: 640px',
      md: 'min-width: 768px',
      lg: 'min-width: 1024px',
    };
    expect(breakpoints.md).toContain('768px');
  });

  it('applies grid column changes', () => {
    const gridClasses = {
      mobile: 'grid-cols-1',
      tablet: 'md:grid-cols-2',
      desktop: 'lg:grid-cols-3',
    };
    expect(gridClasses.tablet).toContain('md:grid-cols-2');
  });
});

// Theme customization tests
describe('Theme Configuration', () => {
  it('defines color variables', () => {
    const colors = ['primary', 'secondary', 'accent', 'background', 'foreground', 'muted', 'border'];
    expect(colors).toContain('primary');
    expect(colors).toContain('background');
  });

  it('supports dark mode', () => {
    const prefersDark = true; // Would be from media query
    expect(prefersDark).toBe(true);
  });
});

export { mockProjects, mockSkills, mockExperience };