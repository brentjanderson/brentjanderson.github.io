module.exports = {
  siteMetadata: {
    title: 'Brent Anderson',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#5896C1', // http://paletton.com/#uid=53w0u0kiCFn8GVde7NVmtwSqXtg
        theme_color: '#5896C1',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
