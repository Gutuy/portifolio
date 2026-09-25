# 🚀 Modern Animated Developer Portfolio (Angular 18)

An animated personal developer portfolio built with modern **Angular 18 standalone components**, **SCSS**, and glassmorphic styling.

---

## 🌐 Live Development Server
Your local development server is currently live:
👉 **[http://localhost:4200/](http://localhost:4200/)**

To start the server manually in your terminal at any time:
```powershell
npm start
```

---

## 📁 Beginner-Friendly Folder Architecture

```text
portifolio/
├── src/
│   ├── app/
│   │   ├── components/                 <-- Individual UI Sections
│   │   │   ├── navbar/                 <-- Sticky frosted glass navigation with mobile drawer
│   │   │   ├── hero/                   <-- Typewriter hero with floating badges & interactive terminal
│   │   │   ├── about/                  <-- Profile story, highlights, and achievement counters
│   │   │   ├── skills/                 <-- 3 Category cards with glowing progress meters & tech pills
│   │   │   ├── projects/               <-- Filterable work showcase with zoom preview & links
│   │   │   ├── experience/             <-- Glowing milestone timeline & certifications
│   │   │   ├── contact/                <-- Direct contact cards & reactive form with validation
│   │   │   └── footer/                 <-- Quick links, social handles & smooth back-to-top button
│   │   ├── models/
│   │   │   └── portfolio.model.ts      <-- TypeScript types defining projects, skills & experiences
│   │   ├── services/
│   │   │   └── portfolio.service.ts    <-- ⭐ EDIT YOUR DATA HERE (One place for all your content!)
│   │   ├── app.component.ts            <-- Standalone root component importing all sections
│   │   ├── app.component.html          <-- Root template structuring page layout
│   │   ├── app.component.scss          <-- Main layout styles
│   │   └── app.config.ts               <-- Angular 18 providers (async animations, routing)
│   ├── index.html                      <-- Google Fonts (Outfit & Plus Jakarta Sans) & title metadata
│   ├── main.ts                         <-- Boots the Angular application
│   └── styles.scss                     <-- Global CSS variables, aurora light effect & keyframe animations
├── public/                             <-- Store your profile images, icons, or PDF resumes here
├── angular.json                        <-- Angular build configuration & style budgets
└── package.json                        <-- Dependencies and run scripts
```

---

## ✏️ How to Personalize with Your Own Information

You do **NOT** need to search through HTML files to update your details! Everything is centralized in:
📂 **`src/app/services/portfolio.service.ts`**

### 1. Update Name, Role, and Bio:
```typescript
readonly profile = {
  name: 'Your Name',
  role: 'Your Main Title',
  tagline: 'Your short hook or pitch...',
  about: `Your personal journey and background...`,
  location: 'City, Country or Remote',
  email: 'your.email@domain.com',
  availableForHire: true,
  resumeUrl: '#' // link to your PDF resume
};
```

### 2. Add or Edit Projects:
Inside `readonly projects: Project[]`:
- Change `title`, `description`, `image`, `tags`, `liveUrl`, and `githubUrl`.
- Tip: Place your project screenshots inside `public/` (e.g. `public/project1.png`) and reference them as `'project1.png'`.

### 3. Add or Edit Skills:
Inside `readonly skillCategories: SkillCategory[]`:
- Adjust skill names and percentage values (`level: 90`). The progress bar will animate automatically to that exact percentage!

### 4. Put Your Own Photo:
Open `src/app/components/about/about.component.html` and replace the image URL in:
```html
<img src="YOUR_IMAGE_PATH" alt="Developer Profile" class="profile-img" />
```
You can also drop a photo file into `public/profile.jpg` and set `src="profile.jpg"`.

---

## 🛠️ Build for Production
To generate an optimized, minified production build ready for deployment:
```powershell
npm run build
```
The output files will be created in `dist/portfolio/browser/`. You can drag-and-drop this folder straight to **Netlify**, **Vercel**, or **GitHub Pages**!
