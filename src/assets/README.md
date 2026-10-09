# Assets Folder Documentation

This folder is intended for static assets like images, SVGs, and fonts that are bundled by Vite.

## Adding Images
When you want to add an image to a component:
1. Place the image file (e.g., `logo.png` or `hero.jpg`) inside this folder.
2. In your React component, import the image at the top of the file:
   ```javascript
   import heroImage from '../../assets/hero.jpg';
   ```
3. Use it in an `<img>` tag:
   ```javascript
   <img src={heroImage} alt="Hero representation" />
   ```

## Why use `src/assets` vs `public/`?
- **`src/assets/`**: Use this for images that are imported directly into your React components. Vite will process these, hash their filenames for cache-busting, and optimize them.
- **`public/`**: Use the public directory (at the root of the project, outside `src/`) for files that you want to be served exactly as they are without processing (like `favicon.ico` or a `robots.txt` file). Files in `public/` are referenced using an absolute path (e.g., `/favicon.ico`).
