# 🚀 Anuvesh's React Portfolio

A modern, responsive portfolio website built with React showcasing my skills, projects, and achievements. Features dynamic data integration, beautiful animations, and optimized performance.

## ✨ Features

### 🎨 **Modern Design & UX**
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Background Video**: YouTube video background with shimmer loading effect
- **Smooth Animations**: CSS transitions and React-based animations
- **Glassmorphism Effects**: Modern UI with glass-like components
- **Dark/Light Theme Support**: Adaptive color schemes

### 📊 **Dynamic Data Integration**
- **LeetCode Integration**: Real-time LeetCode profile data and submission graphs
- **GitHub Integration**: GitHub activity and contribution graphs
- **Social Media Links**: Direct integration with Twitter and Discord
- **Email Contact Form**: Built-in contact functionality

### 🛠 **Technical Features**
- **React Router**: Single-page application with smooth navigation
- **Performance Optimized**: React.memo, useMemo, and useCallback implementations
- **Code Splitting**: Efficient bundle loading
- **SEO Optimized**: Meta tags and proper structure
- **Accessibility**: ARIA labels and keyboard navigation

### 📱 **Components**
- **Home**: Landing page with background video
- **About**: Personal information and background
- **Skills**: Interactive circular skills visualization
- **Projects**: Portfolio projects showcase
- **Resume**: Downloadable resume with professional layout
- **LeetCode**: Dynamic LeetCode statistics and graphs
- **GitHub**: GitHub activity visualization

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anuvesh07/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the application

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Starts the development server with hot reload |
| `npm test` | Runs the test suite in interactive mode |
| `npm run build` | Creates optimized production build |
| `npm run eject` | Ejects from Create React App (⚠️ irreversible) |

## ⚙️ Configuration

### LeetCode Integration
Update your LeetCode username in `src/config/leetCode.js`:
```javascript
export const LEETCODE_CONFIG = {
  username: 'YourUsername', // Your LeetCode username
  graphTheme: 'light',      // light, dark, forest, unicorn, etc.
  graphFont: 'baloo',       // baloo, inter, mono, etc.
  graphExt: 'contest',      // contest, activity, heatmap, etc.
};
```

### Social Media Links
Update your social media information in `src/config/social.js`:
```javascript
export const SOCIAL_CONFIG = {
  twitter: {
    url: 'https://x.com/YourUsername',
    username: '@YourUsername'
  },
  discord: {
    url: 'https://discord.gg/YourInvite',
    server: 'Your Discord Server'
  },
  email: {
    address: 'your-email@example.com',
    subject: 'Portfolio Contact'
  }
};
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Navigation.js   # Main navigation menu
│   ├── Home.js         # Landing page
│   ├── About.js        # About section
│   ├── Skills.js       # Skills visualization
│   ├── Projects.js     # Projects showcase
│   ├── Resume.js       # Resume component
│   ├── LeetCodeGraph.js # LeetCode integration
│   ├── GitHubGraph.js  # GitHub integration
│   ├── Footer.js       # Contact footer
│   └── ScrollToTop.js  # Scroll to top button
├── config/             # Configuration files
│   ├── leetCode.js     # LeetCode settings
│   └── social.js       # Social media config
├── utils/              # Utility functions
│   └── leetCodeUtils.js # LeetCode API helpers
└── App.js              # Main application component
```

## 🚀 Performance Optimizations

### React Optimizations
- **React.memo**: Prevents unnecessary re-renders
- **useMemo**: Memoizes expensive calculations
- **useCallback**: Memoizes event handlers
- **Code Splitting**: Lazy loading for better performance

### Bundle Optimizations
- **Tree Shaking**: Removes unused code
- **Minification**: Compressed production builds
- **Image Optimization**: Optimized assets
- **CDN Integration**: Fast content delivery

## 🌐 Deployment

### Netlify (Recommended)
The project includes `netlify.toml` for easy deployment:

1. **Connect to Netlify**
   - Push code to GitHub
   - Connect repository in Netlify dashboard
   - Deploy automatically

2. **Custom Domain** (Optional)
   - Add custom domain in Netlify settings
   - Configure DNS records

### Other Platforms
- **Vercel**: Zero-config deployment
- **GitHub Pages**: Free hosting for public repos
- **Firebase Hosting**: Google's hosting solution

## 🔧 Customization

### Styling
- **CSS Variables**: Easy color scheme changes
- **Component Styling**: Modular CSS files
- **Responsive Design**: Mobile-first approach
- **Animation Library**: Custom CSS animations

### Content
- **Component Data**: Update content in component files
- **Configuration**: Modify settings in config files
- **Assets**: Replace images and videos in public folder

## 📚 Technologies Used

### Frontend
- **React 19.1.0**: Latest React with hooks
- **React Router 7.6.3**: Client-side routing
- **React Icons 5.5.0**: Icon library
- **CSS3**: Modern styling with animations

### Development
- **Create React App**: Development environment
- **ESLint**: Code linting
- **Jest**: Testing framework
- **Web Vitals**: Performance monitoring

### APIs & Integrations
- **LeetCode GraphQL API**: Profile data
- **GitHub API**: Repository information
- **YouTube Embed API**: Background video
- **Social Media APIs**: Direct links

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: anuveshchilwal007@gmail.com
- **Twitter**: [@AnuveshC7](https://x.com/AnuveshC7)
- **Discord**: [Join Server](https://discord.gg/dRcgUHf7j2)

## 🙏 Acknowledgments

- **Create React App** for the development environment
- **React Icons** for beautiful icons
- **LeetCode** for the API integration
- **Netlify** for hosting and deployment
- **YouTube** for background video hosting

---

⭐ **Star this repository if you found it helpful!**

🔗 **Live Demo**: [Portfolio Website](https://boisterous-dieffenbachia-ca291e.netlify.app/)
