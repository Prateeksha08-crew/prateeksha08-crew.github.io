# Prateeksha J | Portfolio

My personal portfolio website. It brings together my projects, internships, education, and certifications in one place.

**Live site:** https://prateeksha08-crew.github.io

## About

I am a final year Computer Science and Engineering student at Sri Ramakrishna Engineering College, Coimbatore. I build full stack and AI powered applications, and this site is where I show that work.

## What is on the site

- **Home:** introduction with links to my projects and resume
- **About:** a short story, my skills, and a scrolling skill strip
- **Projects:** four projects with details, live demos, and source code
- **Education:** academic timeline
- **Internship:** full stack and data science internships
- **Certification:** certificates and achievements
- **Contact:** email, phone, social links, and a message form that opens the visitor's email app

## Built with

- HTML5
- CSS3 (custom properties, grid, flexbox, responsive layout)
- Vanilla JavaScript (no frameworks or build step)
- Google Fonts: Bricolage Grotesque and Figtree

The site is fully responsive and respects the "reduce motion" setting on a visitor's device.

## Project structure

```
portfolio/
├── index.html      page content
├── style.css       all styling
├── script.js       interactions and the editable links list
└── assets/
    ├── photo.jpg                   profile photo
    └── Prateeksha_J_Resume.pdf     resume download
```

## Run it locally

1. Clone the repository
   ```
   git clone https://github.com/Prateeksha08-crew/prateeksha08-crew.github.io.git
   cd prateeksha08-crew.github.io
   ```
2. Open `index.html` in a browser, or use the Live Server extension in VS Code for automatic refresh.

No installation is needed.

## Customise

All profile, demo, and source links are in the `LINKS` list at the top of `script.js`. A link left as an empty string is hidden automatically, so the site never shows a broken button.

To add a project, copy an existing `<article class="project">` block in `index.html`, change the text, and add its links to the `LINKS` list.

## Deploy

The site is hosted with GitHub Pages. Pushing to the `main` branch updates the live site within a couple of minutes.

## Contact

- Email: prateekshaj03@gmail.com
- Location: Coimbatore, Tamil Nadu, India
- GitHub: https://github.com/Prateeksha08-crew
