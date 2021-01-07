module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'Group Cleanse 2021',
    author: 'Matthew Gabriel',
    description: 'An Information website on the upcoming Group Cleanse',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      // {
      //   name: 'Layouts',
      //   link: '#',
      //   items: [
      //     {
      //       name: 'Left Sidebar',
      //       link: '/left-sidebar',
      //     },
      //     {
      //       name: 'Right Sidebar',
      //       link: '/right-sidebar',
      //     },
      //     {
      //       name: 'No Sidebar',
      //       link: '/no-sidebar',
      //     },
      //     {
      //       name: 'SubMenu',
      //       link: '#',
      //       items: [
      //         {
      //           name: 'Option 1',
      //           link: '#',
      //         },
      //         {
      //           name: 'Option 2',
      //           link: '#',
      //         },
      //         {
      //           name: 'Option 3',
      //           link: '#',
      //         },
      //         {
      //           name: 'Option 4',
      //           link: '#',
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   name: 'Elements',
      //   link: '/elements',
      // },
      // {
      //   name: 'Sign Up',
      //   link: 'http://41.185.8.137/~xic02/alchemyofremembrance/',
      //   cl: 'button primary',
      // },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    {
       resolve: 'gatsby-plugin-mailchimp',
       options: {
           endpoint: 'https://netlify.us4.list-manage.com/subscribe/post?u=4bb341a70f699ab5f28026c9b&amp;id=4899fd0d31', // add your MC list endpoint here; see instructions below
       },
   },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
  ],
}
