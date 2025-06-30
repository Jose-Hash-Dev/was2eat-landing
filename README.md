# Was2Eat Landing Page

A modern, responsive landing page for Was2Eat - an AI-powered nutrition analysis mobile application that helps users make informed food choices through barcode scanning and comprehensive product analysis.

## 🌟 Features

### 🎨 Design & UX

- **Modern Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Interactive Hero Section** - Mouse-tracking product images with parallax effects
- **Smooth Animations** - Swiper.js carousels with train-like sliding effects
- **Mobile-First Approach** - Dedicated mobile layouts with touch-friendly interactions

### 📱 Pages & Sections

- **Home Page** - Hero section with interactive product showcase
- **Application Page** - Feature demonstrations with swipeable cards
- **Company Page** - Team showcase and company information
- **About/Contact/Legal Pages** - Complete information architecture

### 🔧 Interactive Components

- **Feature Sliders** - Mobile card carousels for features and trusted science
- **Team Section** - Professional team showcase with social links
- **Navigation** - Responsive navigation with mobile menu
- **Download Buttons** - App store and Play Store download links

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Material-UI (MUI)](https://mui.com/) with custom themes
- **Animations**: [Swiper.js](https://swiperjs.com/) for carousels
- **Icons**: Material-UI Icons
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/was2eat-landing.git
   cd was2eat-landing
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
was2eat-landing/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── application/       # Application features page
│   │   ├── company/           # Company & team page
│   │   ├── contact/           # Contact page
│   │   ├── globals.css        # Global styles
│   │   ├── HomePage.tsx       # Main homepage component
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable components
│   │   ├── FeaturesSlider.tsx # Mobile features carousel
│   │   ├── TrustedScienceSlider.tsx # Mobile science carousel
│   │   ├── Navigation.tsx     # Header navigation
│   │   ├── Footer.tsx         # Footer component
│   │   └── DownloadButtons.tsx # App download buttons
│   └── theme.ts               # MUI theme configuration
├── public/
│   └── images/                # Static assets
├── translation.json           # Content translations
└── README.md
```

## 🎯 Key Features Implementation

### Mobile Optimization

- **Responsive Breakpoints**: Custom breakpoints for mobile, tablet, and desktop
- **Touch Interactions**: Swipe gestures for mobile carousels
- **Optimized Images**: Different image sizes for mobile vs desktop
- **Mobile Navigation**: Hamburger menu with smooth animations

### Interactive Elements

- **Mouse Tracking**: Product images follow mouse movement on desktop
- **Auto-sliding Carousels**: Features and science sections with automatic progression
- **Hover Effects**: Smooth transitions and color changes
- **Loading States**: Optimized image loading with Next.js Image component

### Performance

- **SSR/SSG**: Server-side rendering with Next.js
- **Image Optimization**: Automatic image optimization and lazy loading
- **Code Splitting**: Automatic code splitting for optimal loading
- **SEO Optimized**: Meta tags and structured data

## 🎨 Customization

### Theme Configuration

The MUI theme is configured in `src/theme.ts`:

- **Colors**: Brand colors (#00BF63 primary green)
- **Typography**: Custom font families (Kalam, Urbanist)
- **Breakpoints**: Custom responsive breakpoints
- **Components**: Styled MUI component overrides

### Content Management

Content is managed through:

- `translation.json` - Centralized content management
- Component props - Dynamic content passing
- Static assets in `public/images/`

## 📱 Mobile Features

### Swiper Carousels

- **Features Section**: Swipeable cards showcasing app features
- **Trusted Science**: Cards highlighting scientific backing
- **Auto-play**: Automatic progression with pause on interaction
- **Pagination**: Custom styled pagination dots

### Responsive Images

- **Product Images**: Different sizes for mobile/desktop
- **Mascot Integration**: Contextual mascot placement
- **Optimized Loading**: WebP format with fallbacks

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**

   - Import project to Vercel
   - Connect GitHub repository

2. **Configure Build**

   ```bash
   Build Command: npm run build
   Output Directory: .next
   ```

3. **Environment Variables**
   - Set any required environment variables
   - Configure domain settings

### Other Platforms

The project can be deployed to any platform supporting Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized for Core Web Vitals

## 📞 Support

For support and questions:

- **Email**: info@was2eat.com
- **Website**: [was2eat.com](https://was2eat.com)
- **LinkedIn**: [Was2Eat Company](https://linkedin.com/company/was2eat)

## 📄 License

This project is proprietary software owned by Was2Eat. All rights reserved.

## 🤝 Contributing

This is a private project. For internal development:

1. Create feature branches from `main`
2. Follow TypeScript and ESLint guidelines
3. Test responsive design on multiple devices
4. Submit pull requests for review

---

**Built with ❤️ by the Was2Eat Team**
