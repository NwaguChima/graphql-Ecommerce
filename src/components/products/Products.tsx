import React, { useEffect } from "react";
import Spinner from "../spinner/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../queries/productQueries";
import GET_CURRENCIES from "../../queries/currencyQueries";
import styles from "./Products.module.scss";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductType } from "../../utils/types";
import { getCountry } from "../../utils/helper";

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  // const { loading, error, data } = useQuery(GET_CURRENCIES);

  // query to get products
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      currency: "NGN",
    },
  });

  const country = async () => {
    const countryData = await getCountry(9.0386733, 7.4927962);
    console.log("country", countryData);
  };

  useEffect(() => {
    // country();
  }, []);

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(async (position) => {
  //     console.log("position", position.coords);
  //     const country = await getCountry(
  //       position.coords.latitude,
  //       position.coords.longitude
  //     );
  //   });
  // }

  //   console.log("country", country);
  // });

  return (
    <main className={styles.main}>
      {loading ? (
        <div style={{ paddingTop: "10rem" }}>
          <Spinner />
        </div>
      ) : error ? (
        <p>Error: {error.message}</p>
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
