export const productsQuery = `
{
  products(first: 10) {
    edges {
      node {
        id
        title
        description
        images(first: 1) {
          edges {
            node {
              id
              src
            }
          }
        }
      }
    }
  }
}
`;

export const shopQuery = `
{
  shop {
    name
    primaryDomain {
      url
      host
    }
  }
}`;
