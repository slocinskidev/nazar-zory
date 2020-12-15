module.exports = {
  siteMetadata: {
    title: `Nazar Kebab Żory`,
    description: `Nazar Kebab Żory rozpoczął działalność w 2004 roku i od początku istnienia prowadzony
    jest przez Turka z krwi i kości Leventa Baykala. Od tego czasu lokal przeszedł kompletną
    metamorfozę i za sprawą właściciela stał się jedną z najbardziej rozpoznawalnych
    restauracji typu Fast-Food w mieście.`,
    keywords: `nazar, kebab, nazar kebab, nazar kebab żory, żory kebab, żory jedzenie, jedzenie żory, kebab żory, najlepszy kebab, nazar żory`,
    image: 'static/maskable_logo.png',
    url: `https://nazar-kebab-zory.netlify.app/`,
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nazar Kebab Żory`,
        short_name: `Nazar`,
        start_url: `/`,
        lang: `pl`,
        background_color: `#2C4393`,
        theme_color: `#2C4393`,
        display: `standalone`,
        icon: `static/maskable_logo.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
};
