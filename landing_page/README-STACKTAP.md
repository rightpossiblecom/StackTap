# StackTap Landing Page

Official landing page for StackTap - A simple arcade stacking game.

## Overview

StackTap is a minimal arcade game where players tap the screen to stack moving blocks on top of each other. The objective is to stack as high as possible without misaligning blocks. It's simple, addictive, and impossible to put down.

## Features

- 🎮 Simple tap-to-play mechanics
- 🧱 Dynamic block stacking with auto-trim
- 🎨 Beautiful color progression
- ⚡ Progressive difficulty
- 🏆 Local high score tracking
- ✨ Completely free, no ads

## Tech Stack

- **Framework:** Next.js 16.1
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Runtime:** Node.js

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (package manager)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The development server will start at `http://localhost:3000`

## Project Structure

```
app/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── landing/
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── HowItWorks.tsx
│       └── FAQ.tsx
├── contact/
├── help/
├── privacy-policy/
├── terms/
├── layout.tsx
├── page.tsx
└── globals.css
public/
├── app_logo.png
└── favicon.ico
```

## Pages

- **Home** (`/`) - Main landing page with hero, features, how it works, and FAQ
- **Contact** (`/contact`) - Contact form and support information
- **Help Center** (`/help`) - FAQ and troubleshooting guides
- **Privacy Policy** (`/privacy-policy`) - Privacy and data protection details
- **Terms of Service** (`/terms`) - Terms and conditions

## Design System

The landing page uses a clean, modern design system with:
- **Primary Color:** Blue (#3b82f6)
- **Secondary Color:** Emerald (#10b981)
- **Accent Color:** Amber (#f59e0b)
- **Typography:** System font stack with Geist fonts
- **Dark Mode:** Full dark mode support

## Branding

- **Logo:** StackTap logo (blocks stacking pattern)
- **Favicon:** SVG favicon for browser tab
- **Colors:** Blue → Emerald → Amber gradient progression matching game blocks

## Environment Variables

No environment variables are required for the development or production build of the landing page.

## Building & Deployment

### Production Build

```bash
pnpm build
pnpm start
```

### Deployment

The landing page can be deployed on:
- Vercel (recommended for Next.js)
- Netlify
- Self-hosted Node.js servers
- Docker containers

## Contributing

To make changes to the landing page:

1. Make your edits to the relevant component or page
2. Test locally with `pnpm dev`
3. Build with `pnpm build` to check for errors
4. Commit your changes

## Support

For issues or questions about the website, contact:
- Email: support@stacktap.app
- Website: stacktap.app

## License

© 2026 StackTap. All rights reserved.
