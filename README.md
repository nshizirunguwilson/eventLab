# EventLab - Next.js Event Booking Platform

A modern, responsive event booking website built with Next.js 14, featuring dark/light theme support, interactive components, and a beautiful UI.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless responsive breakpoints
- **Dark/Light Theme**: System preference detection with manual toggle
- **Interactive Components**: Swiper carousels, hover effects, and smooth animations
- **Toast Notifications**: User feedback with Sonner toast library
- **Error Handling**: Comprehensive error pages (404, 500, global error)
- **Performance Optimized**: Turbopack for fast development builds
- **Type Safety**: Full TypeScript implementation with proper type definitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14.0.4 with App Router
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Font Awesome 6.7.1
- **Carousel**: Swiper.js 11.0.5
- **Theming**: next-themes 0.2.1
- **Notifications**: Sonner 1.4.0
- **Linting**: ESLint with Next.js config
- **Build Tool**: Turbopack (experimental)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+

- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd eventLab
   ```

2. **Navigate to client directory and install dependencies**

   ```bash
   cd client
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

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🧪 Testing the App

1. **Theme Toggle**: Click the moon/sun icon in header
2. **Mobile Menu**: Resize browser or use mobile view
3. **Interactive Elements**: Click buttons, cards, and links
4. **Toast Notifications**: Various actions show toast messages
5. **Responsive Design**: Test on different screen sizes
6. **Error Pages**: Navigate to non-existent routes

## 🔧 Development Features

- **Turbopack**: Fast development builds
- **Hot Reload**: Instant updates on file changes
- **TypeScript**: Full type checking
- **ESLint**: Code linting and formatting
- **Dark Mode**: Toggle between light/dark themes
- **Responsive**: Test on different screen sizes

## 🎨 Customization

### Theme Configuration

The app uses `next-themes` for theme management. Themes can be customized in:

- `src/components/theme-provider.tsx` - Theme provider configuration
- `tailwind.config.js` - Dark mode and color customization

### Adding New Components

1. Create component in `src/components/`
2. Export as default function
3. Import and use in `src/app/page.tsx`

### Data Management

Static data is managed in `src/data/constants.ts`. To add new data:

1. Update the appropriate array
2. Update TypeScript types in `src/types/index.ts`
3. Use in components

## 🔧 Configuration

### Import Aliases

The project uses `@/*` import aliases configured in `tsconfig.json`:

```typescript
"paths": {
  "@/*": ["./src/*"]
}
```

### Image Domains

External image domains are configured in `next.config.js` for Next.js Image optimization.

### Tailwind Configuration

Custom Tailwind configuration includes:

- Poppins font family
- Custom blue color (`eventlab-blue`)
- Dark mode support

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting platform

## 📱 Features Overview

### Interactive Elements

- **Theme Toggle**: Switch between light/dark modes
- **Mobile Menu**: Responsive hamburger menu
- **Search**: Interactive search with toast feedback
- **Carousels**: Swiper-powered event carousels
- **Hover Effects**: Smooth animations and transitions

### Content Sections

- **Hero Section**: Main landing with search functionality
- **Events Carousel**: Featured event categories
- **Popular Places**: Event listings with filtering
- **Platform Stats**: Key metrics and statistics
- **How It Works**: Step-by-step process explanation
- **Featured Events**: Highlighted event showcases
- **Cities**: Location-based event browsing
- **Organizers**: Event organizer profiles
- **Speakers**: Speaker profiles with social links
- **Blog**: Latest news and articles
- **Testimonials**: Customer reviews
- **Partners**: Partner logos and information

## 🐛 Error Handling

The app includes comprehensive error handling:

- **404 Page**: Custom not-found page with navigation options
- **Error Boundary**: Component-level error handling
- **Global Error**: Application-wide error boundary
- **Toast Notifications**: User-friendly error messages

## 🚀 Next Steps

- Add backend API integration
- Implement user authentication
- Add database for dynamic content
- Set up payment processing
- Add admin dashboard
- Implement real-time features

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support or questions:

- Email: `wilson.codecraft@gmail.com`
- Phone: (+250)791-847-408

---

Built with ❤️ using Next.js and modern web technologies.
