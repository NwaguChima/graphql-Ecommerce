import React from "react";
import Spinner from "../spinner/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../queries/productQueries";
import GET_CURRENCIES from "../../queries/currencyQueries";
import styles from "./Products.module.scss";
import { ProductCard } from "../ProductCard/ProductCard";

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  // const { loading, error, data } = useQuery(GET_CURRENCIES);

  // query to get products
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      currency: "NGN",
    },
  });

  console.log("data", data, loading, error);
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <ProductCard />
      </div>
    </main>
  );
};

export default Products;
