import React, { useContext } from "react";
import Spinner from "../spinner/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../queries/productQueries";
import styles from "./Products.module.scss";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductType } from "../../utils/types";
import GlobalContext from "../../context/globalContext";

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const { currency } = useContext(GlobalContext)!;
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      currency: currency ? currency : "USD",
    },
  });

  return (
    <main className={styles.main}>
      {loading ? (
        <div style={{ paddingTop: "10rem" }}>
          <Spinner />
        </div>
      ) : error ? (
        <p className={styles.error_text}>Error: {error.message}</p>
      ) : (
        <div className={styles.main__container}>
          {data.products.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Products;
