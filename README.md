<div align="center">
  <img alt="logo" src="/public/stoneindexlogo.png" width="100" />
</div>

<h1 align="center">
  Stone Index
</h1>

A Next.js component collection / template. Designed for robust and rapid site development using a large collection of modular components.

<hr>

## Key Features:

-   Prebuilt components with awesome styling
-   Modular Components
-   Accessible, semantic HTML markup
-   Responsive & SEO-friendly with canonical URLs, OpenGraph data and Meta tags.
-   Sitemap support
-   Made with NextJS and TailwindCSS

<br><br>

## Deploy

Deploy using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example).

<br><br>

## Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `npm install`   | Installs dependencies                        |
| `npm run dev`   | Starts local dev server at `localhost:3000`  |
| `npm run build` | Build your production site to `./next/`      |
| `npm run start` | Preview your build locally, before deploying |

<br><br>

## Site configurations

Refer to the json config files below for adjusting site theme and SEO configurations

<br>

### SEO Metadata

Update them within `next.config.js`

```js
env: {
 siteTitle: "Your Company",
  siteDescription: "Your company description.",
  siteKeywords: "your company keywords",
  siteUrl: "You site url",
  siteImagePreviewUrl: "/images/preview.jpeg",
  twitterHandle: "@your_handle"
}
```

<br>

### Update Colors

You can update the colors in `tailwind.config.js` file. Learn more [here](https://tailwindcss.com/docs/configuration).

<br>

### Update Favicon

Update the `site.webmanifest` file and the icons under the public/images/icons folder. You can to generate all the different icon sizes and favicon [here](https://favicon.io/favicon-converter/)
