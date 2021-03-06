export type ProductType = {
  id: number;
  title: string;
  image_url: string;
  price: number;
  total_price?: number;
  quantity?: number;
  product_options: ProductOption[];
};

export type ProductOption = {
  title: string;
  prefix: string;
  suffix: string;
  options: ProductOptionValue[];
};

export type ProductOptionValue = {
  id: number;
  value: string;
};
