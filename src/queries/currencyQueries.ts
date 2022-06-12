// setup currency query;

import { gql } from "@apollo/client";

const GET_CURRENCIES = gql`
  query getCurrencies {
    currencies
  }
`;

export default GET_CURRENCIES;
