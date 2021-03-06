/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "K9Obey San Diego",
    description: "K9Obey: San Diego Dog Training",
  },
  plugins: [
    `gatsby-plugin-react-helmet`, //react helmet for a container for site meta data
    `gatsby-plugin-sharp`, //will be using the sharp plugin for our images
    `gatsby-transformer-sharp`,
    "gatsby-plugin-emotion", //using emotion
    {
      resolve: `gatsby-source-filesystem`,//this is allowing us to access filesystems in graphql
      options: {
        name: `images`,
        path: `${__dirname}/images/`,//resolving an absolute path to images
      },
    },
  ],
}
