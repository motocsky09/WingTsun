<div align="center">

<img src="src/assets/logo.png" alt="Wing Tsun Oradea" width="140">

# Wing Tsun Kung Fu Oradea

Landing site for the **Wing Tsun Kung Fu school in Oradea, Romania** — training schedule,
grading system, instructor profile, and direct sign-ups via WhatsApp.

[![Live](https://img.shields.io/badge/Live-wingtsun.netlify.app-c0392b?style=flat-square)](https://wingtsun.netlify.app/)
[![Angular](https://img.shields.io/badge/Angular-16-dd0031?style=flat-square&logo=angular&logoColor=white)](https://angular.io/)
[![Deploy: Netlify](https://img.shields.io/badge/Deploy-Netlify-00c7b7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com/)

**[wingtsun.netlify.app](https://wingtsun.netlify.app/)**

</div>

---

## Preview

| Home | Training |
|------|----------|
| [<img src="src/assets/github/home_preview.jpg" alt="Home page" width="100%">](src/assets/github/home_full.jpg) | [<img src="src/assets/github/antrenamente_preview.jpg" alt="Training" width="100%">](src/assets/github/antrenamente_full.jpg) |

| Instructor | Grading System |
|------------|----------------|
| [<img src="src/assets/github/antrenor_preview.jpg" alt="Instructor" width="100%">](src/assets/github/antrenor_full.jpg) | [<img src="src/assets/github/grade_preview.jpg" alt="Grades" width="100%">](src/assets/github/grade_full.jpg) |

> Click any image for the full-size version.

---

## Features

- **Home page** with hero, "About" section, training schedule, pricing, events, testimonials, FAQ, and contact.
- **Contact form** that sends the message straight to **WhatsApp**.
- **Grading system** — a 5x5 structure based on the philosophy of the five elements, with forms, gear, and promotion requirements.
- **Instructor page** with a photo gallery (lightbox) and video material.
- **Training gallery** with lightbox and image-to-image navigation.
- **Responsive design**, dark "dojo" theme, and a floating WhatsApp button.
- **Custom 404** page.

---

## Pages and routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/despre` | Wing Tsun training |
| `/antrenor` | Instructor profile (Si-Fu) |
| `/grade` | Grading system |
| `/program`, `/contact` | Redirect to `/` (anchors on the home page) |
| `*` | 404 page |

---

## Tech stack

- [Angular](https://angular.io/) **16** (TypeScript)
- Routing with `@angular/router` (`scrollPositionRestoration` + `anchorScrolling`)
- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- Custom CSS with a variable-based design system (centralized theme, no UI framework)
- Fonts: **Oswald** + **Barlow** (Google Fonts)
- Deployed on [Netlify](https://www.netlify.com/)

---

## Project structure

```
src/
├── app/
│   ├── home/        # Home page
│   ├── workout/     # Training + gallery
│   ├── trainer/     # Instructor page
│   ├── grades/      # Grading system
│   ├── navbar/      # Navigation bar
│   ├── footer/      # Footer
│   └── not-found/   # 404 page
├── assets/          # Images, logos, video, README screenshots
├── styles.css       # Global theme (CSS variables)
└── index.html
```

---

