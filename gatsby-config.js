/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,//react helmet for a container for site meta data
    `gatsby-plugin-sharp`,//will be using the sharp plugin for our images
    `gatsby-transformer-sharp`,
    "gatsby-plugin-emotion",//using emotion 
  ],
}
