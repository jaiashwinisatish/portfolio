# 💻 Ashwini Jaiswal - Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Framer Motion. Features smooth animations, responsive design, and a dynamic contact form powered by Supabase.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- **🎨 Modern UI/UX**: Sleek design with gradient effects and smooth animations
- **⚡ Lightning Fast**: Built with Vite for optimal performance
- **📱 Fully Responsive**: Works seamlessly on all devices
- **🎭 Interactive Animations**: Powered by Framer Motion
- **💬 Contact Form**: Integrated with Supabase for message storage
- **🎯 Smooth Navigation**: Scroll-based navigation with animated sections
- **💡 Thought & Jokes**: Dynamic content that refreshes on demand
- **🌙 Dark Theme**: Eye-friendly dark mode design
- **♿ Accessible**: Built with accessibility best practices

## 🚀 Live Demo

Visit the live site: [Your Portfolio URL]

## 📸 Screenshots

### Hero Section
![Hero Section](./screenshots/hero.png)

### Projects Showcase
![Projects](![Uploading Ashwini Jaiswal - Creative Developer - Google Chrome 09-11-2025 00_19_25.png…]()
)

### Contact Form
![Contact](./screenshots/contact.png)

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.6.3** - Type safety
- **Vite 5.4.2** - Build tool
- **Tailwind CSS 3.4.1** - Styling
- **Framer Motion 12.23.22** - Animations
- **Lucide React 0.344.0** - Icons

### Backend
- **Supabase** - Database and authentication
- **PostgreSQL** - Database (via Supabase)

### Development Tools
- **ESLint** - Code linting
- **PostCSS & Autoprefixer** - CSS processing

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for contact form)

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/jaiashwinisatish/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run database migrations**

Execute the SQL migration in your Supabase dashboard:
```sql
-- Located in: supabase/migrations/20251108152050_create_contacts_table.sql
```

5. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

6. **Open your browser**
Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
# or
yarn build
```

The optimized production build will be in the `dist` directory.

## 📁 Project Structure

```
portfolio/
├── public/               # Static assets
├── src/
│   ├── assets/          # Images and media
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── ThoughtJoke.tsx
│   ├── data/            # Static data files
│   │   └── thoughtsAndJokes.ts
│   ├── lib/             # Utilities and configs
│   │   └── supabase.ts
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── supabase/
│   └── migrations/      # Database migrations
├── .env.example         # Environment variables template
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎯 Key Sections

### Hero Section
- Animated particle background
- Typewriter effect with rotating phrases
- Social media links
- Call-to-action buttons

### About Section
- Personal introduction
- Animated profile image
- Key strengths showcase

### Skills Section
- Animated skill bars
- Technology icons
- Proficiency levels

### Projects Section
- Project cards with hover effects
- Live demo and GitHub links
- Technology tags
- Responsive grid layout

### Thought & Joke Section
- Random inspirational thoughts
- Tech-related humor
- Refresh functionality

### Contact Section
- Working contact form
- Social media links
- Contact information
- Form validation
- Success/error notifications

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `src/components/Hero.tsx`
2. **About Section** - Edit `src/components/About.tsx`
3. **Projects** - Edit the projects array in `src/components/Projects.tsx`
4. **Skills** - Edit the skills array in `src/components/Skills.tsx`
5. **Contact Info** - Edit contact details in `src/components/Contact.tsx`

### Change Color Scheme

Colors are defined in Tailwind CSS classes. Main colors used:
- Primary: `cyan-400` / `cyan-500`
- Secondary: `purple-400` / `purple-500`
- Background: `slate-900` / `slate-800`

Update these in component files to change the color scheme.

### Add More Thoughts/Jokes

Edit `src/data/thoughtsAndJokes.ts` to add more content.

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables
6. Deploy!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Ashwini Jaiswal**

- Email: ashwinisj2005@gmail.com
- GitHub: [@jaiashwinisatish](https://github.com/jaiashwinisatish)
- LinkedIn: [Ashwini Jaiswal](https://www.linkedin.com/in/ashwini-jaiswal-095165282/)

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Supabase](https://supabase.com/) - Backend services
- [Vite](https://vitejs.dev/) - Build tool

## 🐛 Known Issues

- None at the moment! If you find any, please [open an issue](https://github.com/jaiashwinisatish/portfolio/issues).

## 🗺️ Roadmap

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add more project examples
- [ ] Include resume download feature
- [ ] Add testimonials section
- [ ] Implement analytics

---

Made with ❤️ by [Ashwini Jaiswal](https://github.com/jaiashwinisatish)

⭐ Star this repo if you found it helpful!
