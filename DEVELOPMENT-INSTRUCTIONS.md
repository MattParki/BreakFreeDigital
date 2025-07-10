# BreakFree Digital - Development Instructions

## 📁 File Structure & Organization

### Core Principles
1. **Small, Focused Files**: Keep components under 200 lines when possible
2. **Single Responsibility**: Each file should have one clear purpose
3. **Consistent Naming**: Use clear, descriptive names following conventions
4. **Logical Grouping**: Group related files together in appropriate directories

### Directory Structure
```
BreakFreeDigital/
├── app/                          # Next.js 13+ app directory
│   ├── (routes)/                 # Route groups
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # Reusable components
│   ├── ui/                      # Base UI components (shadcn/ui)
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/                # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PricingSection.tsx
│   │   └── ContactSection.tsx
│   ├── forms/                   # Form components
│   │   ├── ContactForm.tsx
│   │   └── NewsletterForm.tsx
│   └── common/                  # Common reusable components
│       ├── AnimatedText.tsx
│       ├── LoadingSpinner.tsx
│       └── ScrollToTop.tsx
├── lib/                         # Utility functions
│   ├── utils.ts                 # General utilities
│   ├── validations.ts           # Form validation schemas
│   ├── constants.ts             # App constants
│   └── types.ts                 # Type definitions
├── hooks/                       # Custom React hooks
│   ├── useScrollAnimation.ts
│   ├── useContactForm.ts
│   └── useAnalytics.ts
├── styles/                      # Additional styles
│   └── globals.css              # Global CSS overrides
└── public/                      # Static assets
    ├── images/
    ├── icons/
    └── logos/
```

### File Naming Conventions
- **Components**: PascalCase (`HeroSection.tsx`, `ContactForm.tsx`)
- **Utilities**: camelCase (`utils.ts`, `validations.ts`)
- **Hooks**: camelCase starting with 'use' (`useScrollAnimation.ts`)
- **Types**: PascalCase for interfaces (`UserData.ts`, `ApiResponse.ts`)
- **Constants**: UPPER_SNAKE_CASE within files, camelCase for filenames

## 🔧 Component Development Standards

### Component Structure Template
```typescript
// components/sections/HeroSection.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

// Types (if complex, move to separate file)
interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText?: string
  onCtaClick?: () => void
}

// Constants (if many, move to separate file)
const ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// Main component
export function HeroSection({ 
  title, 
  subtitle, 
  ctaText = 'Get Started',
  onCtaClick 
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={ANIMATION_VARIANTS}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Button 
            size="lg" 
            onClick={onCtaClick}
            className="bg-slate-800 hover:bg-slate-900"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Export as default if it's the main component
export default HeroSection
```

### Component Guidelines
1. **Use TypeScript interfaces** for all props
2. **Provide default values** for optional props
3. **Use descriptive prop names** that explain purpose
4. **Export both named and default** exports when appropriate
5. **Keep components pure** when possible (no side effects)
6. **Use consistent className patterns** following Tailwind conventions

### Component Composition Rules
- **Container Components**: Handle data fetching and state management
- **Presentational Components**: Handle UI rendering only
- **Compound Components**: For complex UI patterns (modals, dropdowns)
- **Higher-Order Components**: For cross-cutting concerns (authentication, analytics)

## 🎯 TypeScript Best Practices

### Type Safety Requirements
```typescript
// lib/types.ts
export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'client'
  createdAt: Date
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
  company?: string
  budget?: 'starter' | 'professional' | 'enterprise'
}

// Use utility types for variations
export type CreateUserData = Omit<User, 'id' | 'createdAt'>
export type UpdateUserData = Partial<CreateUserData>
```

### Strict Type Checking
```typescript
// tsconfig.json requirements
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### Type-Safe Event Handlers
```typescript
// ✅ Good: Properly typed event handlers
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  // Handle form submission
}

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target
  setFormData(prev => ({ ...prev, [name]: value }))
}

// ✅ Good: Type-safe refs
const inputRef = useRef<HTMLInputElement>(null)
```

### API Integration Types
```typescript
// lib/api-types.ts
export interface ContactSubmission {
  name: string
  email: string
  message: string
  timestamp: string
}

export interface NewsletterSignup {
  email: string
  source: 'hero' | 'footer' | 'popup'
}

// Use branded types for IDs
export type ContactId = string & { __brand: 'ContactId' }
export type UserId = string & { __brand: 'UserId' }
```

## 🎨 Styling & CSS Guidelines

### Tailwind CSS Best Practices
```typescript
// ✅ Good: Organized className structure
<div className={cn(
  // Layout
  "flex flex-col items-center justify-center",
  // Spacing
  "px-4 py-8 md:px-6 md:py-12",
  // Appearance
  "bg-white border border-slate-200 rounded-lg shadow-sm",
  // Interactions
  "hover:shadow-md transition-shadow duration-200",
  // Responsive
  "md:flex-row md:space-x-6"
)}>
```

### Component Styling Patterns
```typescript
// Use cn (clsx) for conditional classes
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline'
  size: 'sm' | 'md' | 'lg'
  className?: string
}

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        // Variants
        {
          'bg-slate-800 text-white hover:bg-slate-900': variant === 'primary',
          'bg-slate-100 text-slate-900 hover:bg-slate-200': variant === 'secondary',
          'border border-slate-300 bg-transparent hover:bg-slate-50': variant === 'outline',
        },
        // Sizes
        {
          'h-8 px-3 text-sm': size === 'sm',
          'h-10 px-4 text-base': size === 'md',
          'h-12 px-6 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    />
  )
}
```

### CSS Custom Properties
```css
/* styles/globals.css */
:root {
  --color-primary: #1e293b;
  --color-primary-hover: #0f172a;
  --color-secondary: #3b82f6;
  --color-accent: #10b981;
  
  --spacing-section: 3rem;
  --spacing-container: 1rem;
  
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

@media (min-width: 768px) {
  :root {
    --spacing-section: 6rem;
    --spacing-container: 1.5rem;
  }
}
```

## 🔄 State Management & Data Flow

### State Management Guidelines
```typescript
// ✅ Good: Local state for UI-only concerns
const [isMenuOpen, setIsMenuOpen] = useState(false)
const [formData, setFormData] = useState<ContactFormData>({
  name: '',
  email: '',
  message: ''
})

// ✅ Good: Custom hooks for complex state logic
function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      await submitContactForm(data)
      // Handle success
    } catch (error) {
      // Handle error
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    setFormData,
    isSubmitting,
    errors,
    handleSubmit
  }
}
```

### Data Fetching Patterns
```typescript
// hooks/useAnalytics.ts
export function useAnalytics() {
  const trackEvent = useCallback((event: string, properties?: Record<string, any>) => {
    // Type-safe analytics tracking
    if (typeof window !== 'undefined') {
      window.gtag?.('event', event, properties)
    }
  }, [])

  const trackPageView = useCallback((path: string) => {
    trackEvent('page_view', { path })
  }, [trackEvent])

  return { trackEvent, trackPageView }
}
```

## 🧪 Testing & Quality Assurance

### Testing Requirements
```typescript
// components/__tests__/HeroSection.test.tsx
import { render, screen } from '@testing-library/react'
import { HeroSection } from '../HeroSection'

describe('HeroSection', () => {
  it('renders title and subtitle correctly', () => {
    render(
      <HeroSection 
        title="Test Title" 
        subtitle="Test Subtitle" 
      />
    )
    
    expect(screen.getByRole('heading', { name: /test title/i })).toBeInTheDocument()
    expect(screen.getByText(/test subtitle/i)).toBeInTheDocument()
  })

  it('calls onCtaClick when CTA button is clicked', () => {
    const mockOnCtaClick = jest.fn()
    render(
      <HeroSection 
        title="Test Title" 
        subtitle="Test Subtitle"
        onCtaClick={mockOnCtaClick}
      />
    )
    
    screen.getByRole('button', { name: /get started/i }).click()
    expect(mockOnCtaClick).toHaveBeenCalledTimes(1)
  })
})
```

### Code Quality Tools
```json
// package.json
{
  "scripts": {
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

## 📊 Performance & Optimization

### Performance Guidelines
```typescript
// ✅ Good: Lazy loading for heavy components
const HeavyComponent = lazy(() => import('./HeavyComponent'))

// ✅ Good: Memoization for expensive calculations
const ExpensiveComponent = memo(({ data }: { data: ComplexData }) => {
  const processedData = useMemo(() => {
    return processComplexData(data)
  }, [data])

  return <div>{processedData}</div>
})

// ✅ Good: Code splitting for routes
const AboutPage = lazy(() => import('./pages/AboutPage'))
```

### Image Optimization
```typescript
// ✅ Good: Optimized images with Next.js Image
import Image from 'next/image'

<Image
  src="/hero-image.jpg"
  alt="Hero image description"
  width={1200}
  height={600}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

## 🚀 Development Workflow

### Git Workflow
```bash
# Branch naming convention
feature/hero-section-redesign
fix/contact-form-validation
chore/update-dependencies
docs/update-readme

# Commit message format
feat: add hero section animation
fix: resolve contact form validation issue
docs: update development instructions
style: improve button hover effects
refactor: extract common utilities
test: add unit tests for contact form
```

### Code Review Checklist
- [ ] **Type Safety**: All props, functions, and variables are properly typed
- [ ] **Performance**: No unnecessary re-renders or expensive operations
- [ ] **Accessibility**: ARIA labels, keyboard navigation, color contrast
- [ ] **Responsive**: Works across all breakpoints
- [ ] **Testing**: Unit tests for complex logic
- [ ] **Documentation**: JSDoc comments for complex functions
- [ ] **Consistency**: Follows established patterns and conventions

### Pre-commit Hooks
```json
// .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint
npm run type-check
npm run test
```

## 📚 Documentation Standards

### Component Documentation
```typescript
/**
 * HeroSection component displays the main hero content with title, subtitle, and CTA
 * 
 * @param title - Main headline text
 * @param subtitle - Supporting description text
 * @param ctaText - Call-to-action button text (default: "Get Started")
 * @param onCtaClick - Callback function when CTA is clicked
 * 
 * @example
 * <HeroSection
 *   title="Welcome to BreakFree Digital"
 *   subtitle="Transform your digital presence"
 *   ctaText="Start Your Project"
 *   onCtaClick={() => console.log('CTA clicked')}
 * />
 */
```

### README Updates
- Keep component README files updated with usage examples
- Document any breaking changes
- Include setup instructions for new developers
- Maintain changelog for significant updates

## 🎯 Success Criteria

### Code Quality Metrics
- **TypeScript Coverage**: 100% (no `any` types)
- **Test Coverage**: 80%+ for components and utilities
- **ESLint**: Zero warnings or errors
- **Lighthouse Score**: 90+ for all metrics
- **Bundle Size**: Monitor and optimize for performance

### Review Process
1. **Self Review**: Check against this document
2. **Peer Review**: At least one team member review
3. **Design Review**: Ensure alignment with design guidelines
4. **Testing**: Manual testing across devices/browsers
5. **Performance Check**: Lighthouse audit before merge

---

## 🚨 Common Pitfalls to Avoid

1. **Don't use `any` type** - Always provide proper types
2. **Don't create massive components** - Break them down into smaller pieces
3. **Don't ignore accessibility** - Always include ARIA labels and keyboard navigation
4. **Don't skip error handling** - Always handle potential errors gracefully
5. **Don't hardcode values** - Use constants and configuration files
6. **Don't forget mobile-first** - Design for mobile, enhance for desktop
7. **Don't skip prop validation** - Always validate props with TypeScript interfaces
8. **Don't ignore performance** - Use React.memo, useMemo, useCallback appropriately

*These instructions should be followed consistently throughout the development process to ensure high-quality, maintainable code.* 