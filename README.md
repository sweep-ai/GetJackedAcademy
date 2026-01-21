# Get Jacked Academy - Landing Page Funnel

A Next.js landing page funnel for Jack Mandeville's online coaching business, built with a monochrome warrior aesthetic.

## Features

- **Hero Section** with VSL placeholder
- **Interactive Lead Capture Quiz** with:
  - Three goal options (Lose Fat, Grow Muscle, Brain Function)
  - Qualification questions
  - Contact form collection
  - Personalized redirect to lead magnet pages
- **Testimonials & Transformations** section
- **Bio Section** for Jack Mandeville
- **Final CTA** with scroll-to-quiz functionality
- **Peptide FAQ Playbook** section on all pages

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles
│   └── lead-magnet/
│       └── [goal]/
│           └── page.tsx    # Personalized lead magnet pages
├── components/
│   ├── Hero.tsx            # Hero section with VSL
│   ├── Quiz.tsx            # Lead capture quiz
│   ├── Testimonials.tsx    # Testimonials section
│   ├── Bio.tsx             # Jack's bio section
│   ├── FinalCTA.tsx        # Final call-to-action
│   └── PeptideFAQ.tsx      # Peptide FAQ playbook section
└── package.json
```

## Design Philosophy

The site uses a monochrome color scheme (black and white) with bold typography and warrior-themed elements (helmet and sword) to appeal to a male audience focused on self-improvement and discipline.

## Next Steps

- Replace placeholder VSLs with actual video content
- Replace placeholder images with real photos
- Connect form submissions to a backend/email service
- Add analytics tracking
- Implement actual logo design

