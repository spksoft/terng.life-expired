module.exports = {
  siteMetadata: {
    title: `TERNG.LIFE`,
    author: `Sippakorn Raksakiart (spksoft)`,
    aboutMe: `Hello, My name is Sippakorn Raksakiart (Terng). Now, I'm a Senior Software Engineer at Deeple AI. I learn programming since I was 13 year olds and I'm a owner of sPkAutorunkiller. It's a autorun killer program that was publish to COMPUTER.TODAY magazine. I'm the first developer at FINSTREET.co.`,
    description: `A 127.0.0.1 of Sippakorn R.`,
    siteUrl: `https://terng.life`,
    social: {
      facebook: `spkrsk`,
      github: `https://github.com/spksoft`,
      resume: `https://resume.github.io/?spksoft`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-80654035-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TERNG.LIFE Blog`,
        short_name: `TERNG.LIFE`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
