# SaaSPro Landing Page Template

![SaaSPro Template](https://img.shields.io/badge/React-19.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-7.2.4-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.19-blue) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.26-pink)

A modern, responsive SaaS landing page template built with React, Vite, and Tailwind CSS. Perfect for startups and SaaS companies looking to launch their product with a professional, conversion-optimized landing page.

## ✨ Features

- 🚀 **Fast & Modern**: Built with Vite for lightning-fast development and builds
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🎨 **Beautiful Design**: Clean, modern UI with dark mode support
- ⚡ **Smooth Animations**: Powered by Framer Motion for delightful interactions
- 🎯 **Conversion Focused**: Strategic CTAs and sections designed to drive sign-ups
- 🔧 **Highly Customizable**: Easy to modify colors, content, and components
- 🌙 **Dark Mode**: Built-in dark/light theme toggle
- 📊 **SEO Ready**: Semantic HTML and optimized structure
- 🛠️ **Developer Friendly**: Well-organized code with reusable components

## 🖼️ Preview

[View Live Demo](https://saaspro-template.vercel.app)

## 📦 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/saaspro-landing-template.git
cd saaspro-landing-template
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   └── Button.jsx          # Reusable button component
├── hooks/
│   └── useActiveSection.js     # Hook for navbar active state
├── layout/
│   ├── Container.jsx           # Layout container
│   ├── Footer.jsx              # Footer with contact info
│   └── Navbar.jsx              # Navigation bar
├── pages/
│   ├── About.jsx               # About page
│   ├── Contact.jsx             # Contact page
│   ├── Home.jsx                # Main landing page
│   └── PricingPage.jsx         # Pricing page
├── sections/
│   ├── CTA.jsx                 # Call-to-action section
│   ├── Features.jsx            # Features showcase
│   ├── Hero.jsx                # Hero section
│   ├── Pricing.jsx             # Pricing plans
│   └── PricingCard.jsx         # Individual pricing card
└── styles/
    └── index.css               # Global styles
```

## 🎨 Customization

### Colors

The template uses CSS custom properties for easy color customization. Edit the `:root` variables in `src/index.css`:

```css
:root {
  --color-primary: #3b82f6;
  --color-dark: #1f2937;
  /* ... other variables */
}
```

### Content

Update the content in the respective components:

- **Hero Section**: `src/sections/Hero.jsx`
- **Features**: `src/sections/Features.jsx`
- **Pricing**: `src/sections/Pricing.jsx`
- **CTA**: `src/sections/CTA.jsx`
- **Footer**: `src/layout/Footer.jsx`

### Branding

Replace the logo and brand name in:
- `src/layout/Navbar.jsx`
- `src/layout/Footer.jsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to [Netlify](https://netlify.com)

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service.

## 📄 Pages

The template includes multiple pages:

- **Home** (`/`): Main landing page with all sections
- **About** (`/about`): About page
- **Pricing** (`/pricing`): Detailed pricing page
- **Contact** (`/contact`): Contact page

## 🛠️ Technologies Used

- **React 19**: Latest React with concurrent features
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons
- **React Router**: Client-side routing

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the template, please open an issue on GitHub.

---

Made with ❤️ by the SaaSPro Team
