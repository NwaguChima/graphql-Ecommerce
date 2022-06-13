import { gql } from "@apollo/client";

const GET_CURRENCIES = gql`
  query getCurrencies {
    currency
  }
`;

export default GET_CURRENCIES;
