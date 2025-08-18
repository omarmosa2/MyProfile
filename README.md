# Modern Portfolio Website 🚀

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases projects, skills, and provides a contact form for potential clients and employers.

## ✨ Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive Layout**: Optimized for all device sizes (mobile, tablet, desktop)
- **Dark/Light Theme**: Toggle between dark and light modes
- **Interactive Components**: Smooth scrolling, hover effects, and animations using Framer Motion
- **Contact Form**: Functional contact form with EmailJS integration
- **Project Showcase**: Display of various projects with images and descriptions
- **Skills Section**: Visual representation of technical skills
- **Performance Optimized**: Built with Vite for fast development and optimized builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Routing**: React Router DOM
- **Development**: ESLint for code quality

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/modern-portfolio.git
   cd modern-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
modern-portfolio/
├── public/
│   └── images/           # Project images and assets
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   ├── About.jsx    # About section
│   │   ├── Contact.jsx  # Contact form
│   │   ├── Hero.jsx     # Hero section
│   │   ├── Navbar.jsx   # Navigation bar
│   │   ├── Projects.jsx # Projects showcase
│   │   └── Skills.jsx   # Skills section
│   ├── contexts/        # React contexts (Theme, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md
```

## 🎨 Customization

### Adding Your Information

1. **Personal Information**: Update the Hero and About components with your details
2. **Projects**: Add your projects in the Projects component
3. **Skills**: Modify the Skills component to reflect your technical skills
4. **Images**: Replace images in the `public/images/` directory with your project screenshots
5. **Contact Form**: Configure EmailJS with your email service credentials

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update font families in the Tailwind configuration
- **Components**: Customize individual components in the `src/components/` directory

## 📧 Contact Form Setup

To enable the contact form functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service
3. Add your EmailJS credentials to the Contact component
4. Test the form to ensure emails are being sent

## 🌐 Deployment

### GitHub Pages

```bash
npm run build
npm run deploy
```

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel

1. Import your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

If you have any questions or suggestions, feel free to reach out:

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

---

⭐ If you found this project helpful, please give it a star on GitHub!
