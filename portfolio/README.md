# Medeset Befkadu - Professional Portfolio

A modern, responsive, and production-ready portfolio website showcasing my skills, projects, and services as a Front-End Developer.

## 🚀 Features

### Core Functionality
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark/Light theme toggle with localStorage persistence
- ✅ Smooth scrolling and animations
- ✅ Working contact form with Formspree integration
- ✅ Project filtering system
- ✅ Lazy loading for images
- ✅ SEO optimized with meta tags
- ✅ Accessible (ARIA labels, semantic HTML)
- ✅ Performance optimized

### Sections
1. **Hero** - Introduction with animated typing effect
2. **About** - Professional description and statistics
3. **Services** - Web Development, Responsive Design, UI/UX
4. **Skills** - Technical skills with animated progress bars
5. **Projects** - Portfolio projects with filtering
6. **Contact** - Working contact form and social links

## 📋 Setup Instructions

### 1. Contact Form Setup (Formspree)

To make the contact form work:

1. Go to [Formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
5. Open `index.html` and find this line:
   ```html
   <form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
6. Replace `YOUR_FORM_ID` with your actual Formspree form ID

### 2. Update Social Links

Replace placeholder links with your actual profiles in `index.html`:

```html
<!-- Find and update these links -->
<a href="https://github.com/medesetbefkadu" target="_blank">
<a href="https://linkedin.com/in/medesetbefkadu" target="_blank">
<a href="https://twitter.com/medesetbefkadu" target="_blank">
```

### 3. Add Project Images

For better visual appeal, add project screenshots:

1. Create an `img` folder in the portfolio directory (if not exists)
2. Add your project screenshots:
   - `inventory-project.jpg` - Screenshot of Inventory Management System
   - `vital-project.jpg` - Screenshot of Vital Information System
3. The images will automatically display (fallback icons show if images are missing)

### 4. Update Project Links

In `index.html`, update the project links:

```html
<!-- Replace # with actual URLs -->
<a href="YOUR_LIVE_DEMO_URL" target="_blank">Live Demo</a>
<a href="YOUR_GITHUB_REPO_URL" target="_blank">GitHub</a>
```

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:

```css
:root {
  --primary: #6c63ff;        /* Main brand color */
  --secondary: #ff6584;      /* Accent color */
  --bg: #0f0f1a;            /* Background */
  /* ... more variables */
}
```

### Content
- **Name & Info**: Update in `index.html`
- **Skills**: Modify skill percentages in HTML
- **Projects**: Add/remove project cards
- **Services**: Customize service offerings

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## ⚡ Performance

- Optimized CSS and JavaScript
- Lazy loading for images
- Debounced scroll events
- Minimal dependencies (only Font Awesome for icons)
- Fast load times

## 🔒 Security

- No inline scripts
- External links use `rel="noopener noreferrer"`
- Form validation
- Secure form submission via Formspree

## 📄 Files Structure

```
portfolio/
├── index.html              # Main HTML file
├── style.css              # All styles
├── script.js              # All JavaScript
├── Medeset_Befkadu_Colorful_CV.pdf  # CV file
├── img/                   # Images folder
│   ├── photo_2026-04-25_06-19-58.jpg  # Profile photo
│   ├── inventory-project.jpg          # Project screenshot
│   └── vital-project.jpg              # Project screenshot
└── README.md              # This file
```

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select branch and folder
4. Your site will be live at `https://yourusername.github.io/portfolio`

### Netlify
1. Drag and drop the portfolio folder to Netlify
2. Your site is live instantly

### Vercel
1. Import your GitHub repository
2. Deploy with one click

## 📧 Contact

- **Email**: medesetbefkad5@gmail.com
- **Phone**: +251 935 222 605
- **Location**: Dessie, Ethiopia

## 📝 License

This portfolio is open source and available for personal use. Feel free to fork and customize for your own portfolio!

---

**Built with ❤️ by Medeset Befkadu**
