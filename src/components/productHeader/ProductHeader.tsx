import React, { useState } from "react";
import styles from "./ProductHeader.module.scss";

interface ProductHeaderProps {}

export const ProductHeader: React.FC<ProductHeaderProps> = () => {
  const [filter, setFilter] = useState("");

  return (
    <>
      <div className={styles.product_head}>
        <h1>All Products</h1>
        <p>A 360 look at Lumin</p>
      </div>
      <div className={styles.product_filter}>
        <select
          name="filter"
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Filter by</option>
          <option value="camera">Camera</option>
        </select>
      </div>
    </>
  );
};
