# Skinny to Buff - Affiliate Muscle Building Website

A modern, high-converting affiliate website built with Next.js 15 (App Router), Tailwind CSS v4, and Lucide Icons. Designed specifically for the "Skinny to Buff" niche (home workouts for beginners/hardgainers).

## Features

- **High-Performance:** Built with Next.js 15 and Turbopack for lightning-fast speeds.
- **Conversion-Optimized:** Affiliate-ready product cards, neon CTA buttons, and dedicated landing sections.
- **SEO Ready:** Proper semantic HTML, dynamic metadata, and keyword-focused content.
- **Content System:** Markdown-based blog system for easy content management without a database.
- **Modern Design:** Dark-themed aesthetics with high-contrast Lime-400 accents.
- **Mobile Responsive:** Fully optimized for all screen sizes.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 (with Typography plugin)
- **Icons:** Lucide-React
- **Content:** Local Markdown (.md) with `gray-matter` and `react-markdown`
- **Validation:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository (or extract the files).
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using the Vercel Platform:

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and deploy your site.

## Content Management

To add a new blog post:
1. Create a new `.md` file in `content/posts/`.
2. Add the required frontmatter (title, description, date, category, image).
3. Write your content in Markdown.
4. The site will automatically pick up the new post!

---

**Disclaimer:** This site contains affiliate links. As an Amazon Associate, we earn from qualifying purchases.
