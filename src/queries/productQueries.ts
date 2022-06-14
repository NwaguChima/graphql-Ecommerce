import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getProducts($currency: Currency) {
    products {
      id
      title
      image_url
      price(currency: $currency)
    }
  }
`;

export { GET_PRODUCTS };
