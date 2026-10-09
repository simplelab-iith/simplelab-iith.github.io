# Components Folder Documentation

This folder contains all the React components that make up the user interface of the website. 
It is split into global components (like `Header.jsx`, `Footer.jsx`) and page-level components (inside `src/components/pages/`).

## 1. Adding a New Page

If you want to create a completely new page (e.g., an "About Us" page), you must follow these steps:

### Step 1: Create the Component
Create a new file `src/components/pages/About.jsx`:
```javascript
import React from 'react';

export default function About({ t }) {
  return (
    <div className="pt-10 pb-20">
      <h1>{t.about.title}</h1>
    </div>
  );
}
```

### Step 2: Add the Route in `App.jsx`
Open `src/App.jsx`.
1. Import your new component: `import About from './components/pages/About';`
2. Add a new `case` to the `renderPage` function:
```javascript
  case '#about':
    return <About t={t} />;
```

### Step 3: Update the Header Navigation
Open `src/components/Header.jsx`.
Add your new page to the `navItems` array:
```javascript
  const navItems = [
    { key: 'home', path: '#home' },
    // ...
    { key: 'about', path: '#about' } // <-- ADD HERE
  ];
```

### Step 4: Add Translations in `data/i18n.js`
Open `src/data/i18n.js`.
1. Add the navigation label for your new page in the `nav` object for `en`, `hi`, and `te`:
```javascript
nav: {
  // ...
  about: "About Us"
}
```
2. Add a new object for your page's content (like `about: { title: "About Us" }`) in all three language dictionaries.

## 2. Editing Existing Pages
To change the layout or structure of a page, find the corresponding file in `src/components/pages/`. 
- **Tailwind CSS:** Styling is handled via Tailwind CSS classes in the `className` attribute.
- **Content:** Do not hardcode text directly in the HTML if possible. Reference the translation dictionary via the `t` prop (e.g., `{t.home.visionTitle}`).

## 3. Modifying the Navigation (Header & Footer)
- `Header.jsx`: Controls the top navigation bar, mobile menu, and language dropdown.
- `Footer.jsx`: Controls the bottom footer. Links and address information are located inside this file, but the text content is pulled from local dictionaries inside the component itself (or `i18n.js`).
