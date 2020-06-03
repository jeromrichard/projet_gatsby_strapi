let facebook_pixel = ''
let gtm = ''

module.exports = {
  siteMetadata: {
    title: `RESSOURCES 3C`,
    description: `Gatsby + Strapi = <3`,
    author: `Jérôme Richard`,
    siteUrl: `https://gatsby-strapi-starter.netlify.com/`,
    phone: '12345',
   
    address: '123 fake street',
    email: 'contact@test.com'

  },
  plugins: [
  //  {
  //    resolve: `gatsby-source-airtable`,
  //    options: {
  //      apiKey: `keyKnzAW2FKCcNlIL`,
  //      tables: [
  //        {
  //          baseId: `appUupdiPvAlAzVdL`,
  //          tableName: `Collaborateur`
  //        },
          // We can add other bases/tables here, too!
          //{
            //baseId: `AIRTABLE_BASE_ID`,
            //tableName: `Sides`
          //}
  //      ]
  //    }
  //  },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: gtm,
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/images/gatsby-icon.png'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     queryLimit: 1000, // Default to 100
    //     contentTypes: ['article'],
    //     // Possibility to login with a strapi user, when content types are not publically available (optional).
    //     loginData: {
    //       identifier: "",
    //       password: "",
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-styled-components`
  ],
}
