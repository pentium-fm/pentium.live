require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Pentium Live`,
    description: `Moroccan dev podcast`,
    author: `@pentium`,
  },
  plugins: [
    {
      resolve: '@vojtaholik/gatsby-theme-simplecast',
      options: {
        podcastId: process.env.PODCAST_ID,
        simplecastApiSecret: process.env.SIMPLE_CAST_API_SECRET, 
        markdownPath: 'content/episodes',
      },
    },
  ],
}