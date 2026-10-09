# ΣλMPL∃ (Simple) Lab Website

Welcome to the official repository for the **ΣλMPL∃ (Simple) Lab** at **IIT Hyderabad (IITH)**, led by Dr. Ashish Mishra. 

## About the Lab
The **ΣλMPL∃ (Simple) Lab** is directed by Dr. Ashish Mishra, who joined IIT Hyderabad as an Assistant Professor in March 2024. Prior to IITH, he was a Postdoctoral Researcher at Purdue University's PurPL group and completed his Ph.D. at IISc Bengaluru. The lab views programming languages not merely as notation, but as the core logical machinery for solving computation problems.

The research group focuses deeply on:
- **Program Synthesis:** Developing type-driven synthesis, scalable synthesis and repair, and neurosymbolic program synthesis architectures.
- **Automated Program Verification:** Applying under-approximate reasoning, incorrectness logic, and reasoning about side-effects and higher-order programs.
- **Functional Programming & Type Systems:** Designing rich mathematical models like refinement types, domain-specific languages (DSLs), and advanced type inference systems.

## Tech Stack
This website is a modern, responsive Single Page Application (SPA) built to showcase the lab's research, publications, and open positions.
- **Framework:** React (v19) + Vite
- **Styling:** Tailwind CSS (v3)
- **Routing:** Custom lightweight hash-based routing.
- **Internationalization (i18n):** Custom manual translation system supporting English, Hindi, and Telugu.

## 🚀 Installation & Local Development

### Requirements
- **Node.js**: v18.0.0 or higher is recommended.
- **npm**: v8.0.0 or higher (comes with Node.js).

### Getting Started
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Srichetan05/-MPL-Simple-Lab-IITH.git
   cd -MPL-Simple-Lab-IITH
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173/` (or the port specified in your terminal).

## 🌍 Deployment

To build the application for production, run:
```bash
npm run build
```
This will bundle the React application and optimize all assets into a `dist/` directory.

Since this is a static Single Page Application (SPA), the contents of the `dist/` directory can be deployed to any static web host, such as:
- **GitHub Pages** (Free and standard for academic pages)
- **Vercel** or **Netlify**
- Any standard Apache/Nginx web server.

## Developer Guides
If you are looking to update or maintain this website, please refer to the documentation files located throughout the codebase:
- [Data & Content Updates](src/data/README.md)
- [Component & Page Creation](src/components/README.md)
- [Asset Management](src/assets/README.md)

## 📝 TODO List

**Important Pending Updates for Site Maintainers:**
- **Replace Dummy Links:** There are currently many placeholder/dummy links scattered throughout the application (e.g., in the Footer, social media icons, and some buttons). These must be audited and replaced with actual URLs.
- **Update Information:** The current copy and text information provided across the pages are placeholders or early drafts and are not fully accurate. The content needs a thorough review and must be updated with the most recent and precise lab information before going live.
- **Build out 'Team' Page:** The `team.js` data file contains member information, but an interface to render this cleanly might need to be expanded.
