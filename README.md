# html-markdown.css

This simple CSS library provides a basic stylesheet making simple HTML elements look like Markdown.

It uses CSS `::before` and `::after` pseudo-elements to add the Markdown-like syntax around the elements.

Everything can be customized with CSS variables. Dark and light modes are supported by default thanks to the `light-dark()` CSS function and the `color-scheme` property.

## Usage

Load the `html-markdown.css` stylesheet in your HTML file.

```html
<!-- Minified version (2,25ko gzip, 3,87 Ko) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/html-markdown.css@latest/build/html-markdown.min.css" />

<!-- Unminified version (2,25ko gzip, 4,58ko) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/html-markdown.css@latest/build/html-markdown.css" />
```

Wrap your HTML iside a `main` element if you want to contain your content inside a centered layout.

```html
<main>
  <h1>Title</h1>
  <p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
  <!-- ... -->
</main>
```

## Customization

You can customize the styles by overriding the CSS variables provided by `html-markdown.css`.

Here are all the available CSS variables:

```css
:root {
  --md-layout-width: 800px; /* Width of the main content area */
  --md-layout-padding: 20px; /* Padding around the main content area */
  --md-spacing: 1em; /* Spacing between elements */

  /* Font */
  --md-font-family: monospace; /* Font family for the content */
  --md-font-size: 16px; /* Base font size */
  --md-font-weight: 400; /* Base font weight */
  --md-line-height: 1.65; /* Base line height for better readability */

  /* Colors */
  --md-background-light: #f8f8f2; /* Light background color */
  --md-background-dark: #1e1e1e; /* Dark background color */
  --md-background: light-dark(
    var(--md-background-light),
    var(--md-background-dark)
  ); /* Background color that adapts to light/dark mode */
  --md-foreground-light: #1e1e1e; /* Light foreground color */
  --md-foreground-dark: #f8f8f2; /* Dark foreground color */
  --md-foreground: light-dark(
    var(--md-foreground-light),
    var(--md-foreground-dark)
  ); /* Foreground color that adapts to light/dark mode */
  --md-grey: #7e7e7e; /* Neutral grey color */
  --md-red: #e78482; /* Red color */
  --md-green: #8fc8bb; /* Green color */
  --md-yellow: #e0b972; /* Yellow color */
  --md-orange: #ffb374; /* Orange color */
  --md-blue: #6db3ce; /* Blue color */
  --md-magenta: #ad82cb; /* Magenta color */
  --md-cyan: #2fc2c3; /* Cyan color */

  /* Content color customization */
  --md-heading-color: var(--md-grey); /* Color for headings */
  --md-strikethrough-color: var(--md-grey); /* Color for strikethrough text */
  --md-code-color: var(--md-grey); /* Color for inline code */
  --md-blockquote-color: var(--md-grey); /* Color for blockquotes */
  --md-bold-color: var(--md-magenta); /* Color for bold text */
  --md-italic-color: var(--md-cyan); /* Color for italic text */
  --md-anchor-color: var(--md-yellow); /* Color for anchor links */
```
