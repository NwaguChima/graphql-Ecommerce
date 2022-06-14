import React, { createContext, useState } from "react";
import { ProductType } from "../utils/types";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type GlobalContextType = {
  products: ProductType[];
  showModal: boolean;
  close: boolean;
  cart: ProductType[];
  totalItems: number;
  currency: string;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  setCart: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [close, setClose] = useState(false);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currency, setCurrency] = useState("USD");

  return (
    <GlobalContext.Provider
      value={{
        products,
        showModal,
        close,
        cart,
        totalItems,
        currency,
        setProducts,
        setShowModal,
        setClose,
        setCart,
        setTotalItems,
        setCurrency,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
