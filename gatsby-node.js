const path = require("path")

//CREATE INDIVIDUAL PRODUCT PAGES & WP PAGES
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
            id
          }
        }
      }
      allWpPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  //Product Pages
  pages.data.allShopifyProduct.edges.forEach(edge => {
    createPage({
      path: `/product/${edge.node.handle}`,
      component: path.resolve("./src/templates/ProductPageTemplate.js"),
      context: {
        handle: edge.node.handle,
      },
    })
  })

  //WP Pages
  pages.data.allWpPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: path.resolve("./src/templates/WpPageTemplate.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
