# 🌟 Sajimithan Pathmanathan - Portfolio

A modern, responsive portfolio website showcasing my work as a Software Engineer Intern. Built with cutting-edge technologies and featuring a clean, professional design with smooth animations.

## ✨ Features

- **🎨 Modern UI/UX**: Clean, professional design with smooth animations using Framer Motion
- **🌓 Dark/Light Mode**: Seamless theme switching with next-themes
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **⚡ Performance Optimized**: Built with Next.js 15 and React 19 for blazing-fast performance
- **💾 Database Integration**: Contact form submissions saved to PostgreSQL via Prisma
- **🎯 SEO Friendly**: Proper meta tags and semantic HTML structure
- **♿ Accessible**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.4.6 (App Router)
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 12.23.12
- **Components**: Radix UI primitives
- **Icons**: Lucide React
- **Theme**: next-themes for dark mode

### Backend
- **Database**: PostgreSQL (Prisma Accelerate)
- **ORM**: Prisma 6.13.0
- **API**: Next.js API Routes

### Development Tools
- **Language**: TypeScript 5
- **Linting**: ESLint 9
- **Package Manager**: npm

## 📂 Project Structure

```
My-portfolio/
├── devfolio/                 # Main Next.js application
│   ├── src/
│   │   ├── app/             # App router pages and API routes
│   │   │   ├── api/         # API endpoints
│   │   │   │   └── contact/ # Contact form submission
│   │   │   ├── layout.tsx   # Root layout with theme provider
│   │   │   └── page.tsx     # Home page
│   │   ├── components/
│   │   │   ├── sections/    # Page sections
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── AboutSection.tsx
│   │   │   │   ├── ExperienceSection.tsx
│   │   │   │   ├── ProjectsSection.tsx
│   │   │   │   └── ContactSection.tsx
│   │   │   ├── shared/      # Shared components
│   │   │   │   ├── Navbar.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── AnimatedSection.tsx
│   │   │   └── ui/          # UI primitives
│   │   ├── constants/       # Configuration
│   │   │   └── site.ts      # Site metadata and content
│   │   ├── lib/            # Utilities
│   │   │   ├── utils.ts
│   │   │   └── prisma.ts   # Database client
│   │   └── styles/         # Global styles
│   ├── public/             # Static assets
│   └── prisma/             # Database schema
└── Backend/                # Database configuration
    └── prisma/
        └── schema.prisma   # Prisma schema definition
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager
- PostgreSQL database (or use Prisma Accelerate)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sajimithan/My-portfolio.git
   cd My-portfolio/devfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `devfolio` directory:
   ```env
   DATABASE_URL="your-database-url"
   DIRECT_URL="your-direct-database-url"
   ```

4. **Generate Prisma Client**
   ```bash
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Management

To view and manage contact form submissions:

```bash
cd Backend
npx prisma studio
```

This will open Prisma Studio at [http://localhost:5555](http://localhost:5555)

## 🎨 Customization

### Update Personal Information

Edit `devfolio/src/constants/site.ts` to customize:
- Name and title
- Contact information
- Social media links
- Skills list
- Projects
- Work experience
- Education

### Modify Styling

- **Colors**: Edit `devfolio/src/styles/globals.css` for theme colors
- **Components**: Customize components in `devfolio/src/components/`
- **Tailwind Config**: Modify `devfolio/tailwind.config.js`

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
```

## 🌐 Deployment

This project is optimized for deployment on:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

## 📧 Contact Form

The contact form is fully functional and saves submissions to a PostgreSQL database:
- Form validation on client and server
- Success/error feedback
- Database persistence via Prisma
- View submissions in Prisma Studio

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sajimithan Pathmanathan**
- GitHub: [@Sajimithan](https://github.com/Sajimithan)
- LinkedIn: [sajimithan-pathmanathan](https://linkedin.com/in/sajimithan-pathmanathan)
- Email: sajimithan@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Radix UI for accessible components
- Tailwind CSS for utility-first styling
- Prisma for the excellent ORM

---

**Built with ❤️ using Next.js, React, and TypeScript**
