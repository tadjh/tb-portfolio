# Tadjh Brooks Portfolio

Live at [tadjh.com](https://tadjh.com).

A modern, interactive portfolio website showcasing software engineering projects and creative work. Built with Astro and React, featuring smooth animations, multimedia content, and a focus on user experience.

## 🚀 Features

- **Interactive Projects Showcase** - Featured projects with detailed case studies, videos, and live demos
- **Multimedia Content** - Audio, video, 3D models, and image galleries
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme** - User-preference based theme switching
- **Performance Optimized** - Built with Astro for fast loading and great SEO
- **RSS Feed** - Stay updated with new projects and posts
- **Accessibility Focused** - WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

### Framework & Runtime

- **[Astro](https://astro.build/)** - Static site generator with component islands
- **[React](https://reactjs.org/)** - Interactive components and UI
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Font Awesome](https://fontawesome.com/)** - Icon library
- **[Canvas Confetti](https://github.com/catdad/canvas-confetti)** - Celebration effects

### Content & Assets

- **[MDX](https://mdxjs.com/)** - Content with JSX components
- **[Sharp](https://sharp.pixelplumbing.com/)** - Image optimization
- **Three.js** - 3D model rendering

### Deployment & Tools

- **[Netlify](https://netlify.com/)** - Hosting and deployment
- **[PNPM](https://pnpm.io/)** - Fast, disk-efficient package manager
- **[Prettier](https://prettier.io/)** - Code formatting, with the Astro and Tailwind plugins
- **[Vitest](https://vitest.dev/)** - Unit tests with v8 coverage, in `tests/`

## 📁 Project Structure

```
tb-portfolio/
├── plugins/           # Remark plugins used by MDX
├── public/            # Static assets
├── scripts/           # Build helper scripts
├── src/
│   ├── assets/        # Images, audio, videos, 3D models
│   ├── components/    # Reusable Astro/React components
│   ├── config/        # Site configuration and constants
│   ├── content/       # MDX content files
│   ├── layouts/       # Page layout templates
│   ├── pages/         # Route pages
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Utility functions
├── astro.config.mjs   # Astro configuration
├── prettier.config.cjs # Prettier configuration
├── tailwind.config.cjs # Tailwind CSS configuration
└── package.json       # Project dependencies
```

## 🏃‍♂️ Getting Started

### Prerequisites

- **Node.js** 22 (pinned in `.nvmrc`) and **PNPM** 10
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/tadjh/tb-portfolio.git
   cd tb-portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📜 Available Scripts

| Command              | Description                             |
| -------------------- | --------------------------------------- |
| `pnpm dev`           | Start development server                |
| `pnpm build`         | Build for production with type checking |
| `pnpm preview`       | Preview production build locally        |
| `pnpm format`        | Format all files with Prettier          |
| `pnpm format:check`  | Check formatting without writing        |
| `pnpm test`          | Run the Vitest suite once               |
| `pnpm test:watch`    | Run tests in watch mode                 |
| `pnpm test:coverage` | Run tests with a coverage report        |
| `pnpm astro check`   | Run Astro's type checking               |
| `pnpm astro sync`    | Generate TypeScript types               |

## 🌐 Deployment

The portfolio is configured for deployment on Netlify with the following features:

- **Hybrid Rendering** - Static generation with server-side rendering for dynamic routes
- **Image Optimization** - Automatic image compression and format conversion
- **Asset Optimization** - Automatic minification and bundling
- **Sitemap Generation** - Automatic SEO-friendly sitemap
- **RSS Feed** - Automated content syndication

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist`
4. Deploy!

## 📝 Content Management

Projects and blog posts are written in MDX format in the `src/content/` directory. Each project includes:

- **Frontmatter** - Metadata like title, description, tags, and links
- **Rich Content** - Markdown with embedded React components
- **Media Assets** - Images, videos, and interactive elements
- **SEO Optimization** - Automatic meta tags and structured data

### Adding a New Project

1. Create a new `.mdx` file in `src/content/projects/`
2. Add frontmatter with project details
3. Write your project description and highlights
4. Include relevant media assets in `src/assets/`
5. The project will automatically appear in the portfolio

## 🎨 Customization

### Themes & Styling

- Modify `tailwind.config.cjs` for custom design tokens
- Update `src/components/Theme.tsx` for theme logic
- Customize fonts in `src/components/BaseHead.astro`

### Components

- Interactive components in `src/components/` (React)
- Static components in `src/components/` (Astro)

## 🤝 Contributing

While this is a personal portfolio, contributions for bug fixes, performance improvements, or accessibility enhancements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🙋‍♂️ About

This portfolio showcases the work of **Tadjh Brooks**, a software engineer and music producer who transitioned from the music industry to web development. The site features interactive games, web applications, and creative projects that demonstrate expertise in modern web technologies.

### Featured Projects

- **Bingo Multiplayer App** - Real-time multiplayer bingo game with Socket.io
- **ChatJack** - Collaborative blackjack game with live chat
- **Curtis Mayfield Redesign** - Legacy music website modernization

### Connect

- **Website**: [tadjh.com](https://tadjh.com)
- **LinkedIn**: [Tadjh Brooks](https://linkedin.com/in/tadjhbrooks)
- **GitHub**: [@tadjh](https://github.com/tadjh)
- **Email**: Contact through the portfolio

---

Built with ❤️ using Astro, React, and Tailwind CSS
