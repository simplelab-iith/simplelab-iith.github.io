# Data Folder Documentation

This folder contains all the static data that populates the simple-lab-website. 
Whenever you want to update content on the website without changing the UI layout, this is where you should look.

## 1. Updating Publications (`publications.js`)

To add a new publication, add a new object to the `publications` array.

```javascript
{
  id: "unique-paper-id",
  title: "Your Paper Title",
  authors: "Author A, Author B",
  venue: "Conference/Journal Name 'Year",
  year: "2024",
  category: "Program Synthesis", // See note below about categories!
  link: "https://doi.org/...",
  preprint: "https://arxiv.org/...", // Optional
  abstract: "The abstract of the paper...",
  bibtex: `@inproceedings{...}`
}
```

### ⚠️ IMPORTANT: Adding a NEW Category
If you introduce a brand new category (e.g., "Machine Learning") in the `category` field of a publication, **it will not automatically appear in the filter buttons on the Publications page**.
**Dependency to update:**
You must also edit `src/components/pages/Publications.jsx` and add your new category to the `categories` array at the top of the file:
```javascript
  const categories = [
    "All",
    "Program Synthesis",
    "Program Verification",
    "Type Systems",
    "Machine Learning" // <-- ADD NEW CATEGORY HERE
  ];
```

## 2. Updating Projects (`projects.js`)

To add a new project to the Research page, add an object to the `projects` array:

```javascript
{
  id: "new-project-id",
  name: "Project Name",
  tagline: "Short tagline",
  description: "Detailed description of the project.",
  tags: ["Tag1", "Tag2"],
  status: "Active", // or "Completed"
  github: "https://github.com/..."
}
```
No other dependencies need to be updated. The Research page will automatically render the new project.

## 3. Updating Team Members (`team.js`)

Add a new member object to the `team` array. Note: currently the team data might not be fully rendered on a dedicated page unless one is built, but it is structured as follows:

```javascript
{
  id: "username",
  name: "Full Name",
  role: "PhD Research Scholar",
  affiliation: "Department of...",
  bio: "Short bio...",
  email: "email@iith.ac.in",
  github: "https://github.com/..."
}
```

## 4. Updating Text & Translations (`i18n.js`)

The website uses a manual dictionary for text to support English (`en`), Hindi (`hi`), and Telugu (`te`).
If you want to change any static text (like titles, subtitles, button texts):
1. Find the corresponding key in `i18n.js` under the `en` object.
2. Change the text.
3. **Dependency to update:** You must also manually translate and update the exact same key under the `hi` and `te` objects so that the language toggle works correctly.
