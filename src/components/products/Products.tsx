import React from "react";
import Spinner from "../spinner/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../queries/productQueries";
import GET_CURRENCIES from "../../queries/currencyQueries";
import styles from "./Products.module.scss";

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const { loading, error, data } = useQuery(GET_CURRENCIES);
  // const { loading, error, data } = useQuery(GET_PRODUCTS);

  console.log("data", data);
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <p>Product</p>
      </div>
    </main>
  );
};

export default Products;
